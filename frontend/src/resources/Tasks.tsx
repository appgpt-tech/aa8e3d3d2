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
const TasksTitle = () => {
  const record = useRecordContext();
  return <span>Tasks {record ? `"${ record.title }"` : ""}</span>;
};

export const TasksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="title" />
<TextField source="description" />
<TextField source="deadline" />
<TextField source="status" />
<TextField source="assignee" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const TasksEdit = () => (
                    <Edit title={<TasksTitle />}>
                      <SimpleForm>
                          <TextInput source="title"   />
<TextInput source="description"   />
<TextInput source="deadline"   />
<TextInput source="status"   />
<TextInput source="assignee"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const TasksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="title"   />
<TextInput source="description"   />
<TextInput source="deadline"   />
<TextInput source="status"   />
<TextInput source="assignee"   />
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
,

    ];


