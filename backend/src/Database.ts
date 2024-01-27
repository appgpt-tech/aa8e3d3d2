//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { ArtworksEntity } from "./db/Artworks.entity";
import { ArtistsEntity } from "./db/Artists.entity";
import { CollectionsEntity } from "./db/Collections.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, ArtworksEntity, ArtistsEntity, CollectionsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Artworks":[{"Title":"The Starry Night","Price":100000,"Artist":"Vincent van Gogh","Style":"Post-Impressionism"},{"Title":"The Persistence of Memory","Price":200000,"Artist":"Salvador Dali","Style":"Surrealism"},{"Title":"The Birth of Venus","Price":300000,"Artist":"Sandro Botticelli","Style":"Early Renaissance"}],"Artists":[{"Name":"Vincent van Gogh","Nationality":"Dutch","Birth year":1853},{"Name":"Salvador Dali","Nationality":"Spanish","Birth year":1904},{"Name":"Sandro Botticelli","Nationality":"Italian","Birth year":1445}],"Collections":[{"Collection name":"Impressionism collection","Budget":500000},{"Collection name":"Renaissance collection","Budget":1000000},{"Collection name":"Surrealism collection","Budget":700000}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("ArtworksEntity", data.Artworks);
await this.SeedResource("ArtistsEntity", data.Artists);
await this.SeedResource("CollectionsEntity", data.Collections); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

