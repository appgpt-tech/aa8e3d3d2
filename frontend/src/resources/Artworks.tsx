import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const ArtworksTitle = () => {
  const record = useRecordContext();
  return <span>Artworks {record ? `"${ record.id }"` : ""}</span>;
};

export const ArtworksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Title" />
<TextField source="Price" />
<TextField source="Artist" />
<TextField source="Style" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ArtworksEdit = () => (
                    <Edit title={<ArtworksTitle />}>
                      <SimpleForm>
                          <TextInput source="Title"   />
<TextInput source="Price"   />
<TextInput source="Artist"   />
<TextInput source="Style"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ArtworksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Title"   />
<TextInput source="Price"   />
<TextInput source="Artist"   />
<TextInput source="Style"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


