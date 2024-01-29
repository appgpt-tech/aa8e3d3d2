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
    let data: any = {"Artworks":[{"Title":"Mona Lisa","Price":1000000,"Artist":"Leonardo Da Vinci","Style":"Renaissance"},{"Title":"Starry Night","Price":2000000,"Artist":"Vincent Van Gogh","Style":"Post-Impressionism"},{"Title":"The Scream","Price":1200000,"Artist":"Edvard Munch","Style":"Expressionism"}],"Artists":[{"Name":"Leonardo Da Vinci","Nationality":"Italian","BirthYear":1452},{"Name":"Vincent Van Gogh","Nationality":"Dutch","BirthYear":1853},{"Name":"Edvard Munch","Nationality":"Norwegian","BirthYear":1863}],"Collections":[{"CollectionName":"Renaissance Masters","Budget":5000000},{"CollectionName":"Post-Impressionist Gems","Budget":6000000},{"CollectionName":"Expressionist Explosions","Budget":5500000}]};
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

