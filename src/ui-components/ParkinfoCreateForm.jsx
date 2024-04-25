/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createParkinfo } from "../graphql/mutations";
const client = generateClient();
export default function ParkinfoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    floors: "",
    no_spots: "",
    capacity: "",
    description: "",
  };
  const [floors, setFloors] = React.useState(initialValues.floors);
  const [no_spots, setNo_spots] = React.useState(initialValues.no_spots);
  const [capacity, setCapacity] = React.useState(initialValues.capacity);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFloors(initialValues.floors);
    setNo_spots(initialValues.no_spots);
    setCapacity(initialValues.capacity);
    setDescription(initialValues.description);
    setErrors({});
  };
  const validations = {
    floors: [],
    no_spots: [],
    capacity: [],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          floors,
          no_spots,
          capacity,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createParkinfo.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ParkinfoCreateForm")}
      {...rest}
    >
      <TextField
        label="Floors"
        isRequired={false}
        isReadOnly={false}
        value={floors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              floors: value,
              no_spots,
              capacity,
              description,
            };
            const result = onChange(modelFields);
            value = result?.floors ?? value;
          }
          if (errors.floors?.hasError) {
            runValidationTasks("floors", value);
          }
          setFloors(value);
        }}
        onBlur={() => runValidationTasks("floors", floors)}
        errorMessage={errors.floors?.errorMessage}
        hasError={errors.floors?.hasError}
        {...getOverrideProps(overrides, "floors")}
      ></TextField>
      <TextField
        label="No spots"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={no_spots}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              floors,
              no_spots: value,
              capacity,
              description,
            };
            const result = onChange(modelFields);
            value = result?.no_spots ?? value;
          }
          if (errors.no_spots?.hasError) {
            runValidationTasks("no_spots", value);
          }
          setNo_spots(value);
        }}
        onBlur={() => runValidationTasks("no_spots", no_spots)}
        errorMessage={errors.no_spots?.errorMessage}
        hasError={errors.no_spots?.hasError}
        {...getOverrideProps(overrides, "no_spots")}
      ></TextField>
      <TextField
        label="Capacity"
        isRequired={false}
        isReadOnly={false}
        value={capacity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              floors,
              no_spots,
              capacity: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.capacity ?? value;
          }
          if (errors.capacity?.hasError) {
            runValidationTasks("capacity", value);
          }
          setCapacity(value);
        }}
        onBlur={() => runValidationTasks("capacity", capacity)}
        errorMessage={errors.capacity?.errorMessage}
        hasError={errors.capacity?.hasError}
        {...getOverrideProps(overrides, "capacity")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              floors,
              no_spots,
              capacity,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
