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
const CollectionsTitle = () => {
  const record = useRecordContext();
  return <span>Collections {record ? `"${ record.Collection name }"` : ""}</span>;
};

export const CollectionsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Collection name" />
<TextField source="Budget" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CollectionsEdit = () => (
                    <Edit title={<CollectionsTitle />}>
                      <SimpleForm>
                          <TextInput source="Collection name"   />
<TextInput source="Budget"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const CollectionsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Collection name"   />
<TextInput source="Budget"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,

    ];


