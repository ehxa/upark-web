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
import { createPayment } from "../graphql/mutations";
const client = generateClient();
export default function PaymentCreateForm(props) {
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
    card_number: "",
    first_name: "",
    surname: "",
    cvc: "",
    phone: "",
    exp_date: "",
  };
  const [card_number, setCard_number] = React.useState(
    initialValues.card_number
  );
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [surname, setSurname] = React.useState(initialValues.surname);
  const [cvc, setCvc] = React.useState(initialValues.cvc);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [exp_date, setExp_date] = React.useState(initialValues.exp_date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCard_number(initialValues.card_number);
    setFirst_name(initialValues.first_name);
    setSurname(initialValues.surname);
    setCvc(initialValues.cvc);
    setPhone(initialValues.phone);
    setExp_date(initialValues.exp_date);
    setErrors({});
  };
  const validations = {
    card_number: [],
    first_name: [],
    surname: [],
    cvc: [],
    phone: [],
    exp_date: [],
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
          card_number,
          first_name,
          surname,
          cvc,
          phone,
          exp_date,
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
            query: createPayment.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PaymentCreateForm")}
      {...rest}
    >
      <TextField
        label="Card number"
        isRequired={false}
        isReadOnly={false}
        value={card_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              card_number: value,
              first_name,
              surname,
              cvc,
              phone,
              exp_date,
            };
            const result = onChange(modelFields);
            value = result?.card_number ?? value;
          }
          if (errors.card_number?.hasError) {
            runValidationTasks("card_number", value);
          }
          setCard_number(value);
        }}
        onBlur={() => runValidationTasks("card_number", card_number)}
        errorMessage={errors.card_number?.errorMessage}
        hasError={errors.card_number?.hasError}
        {...getOverrideProps(overrides, "card_number")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              card_number,
              first_name: value,
              surname,
              cvc,
              phone,
              exp_date,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Surname"
        isRequired={false}
        isReadOnly={false}
        value={surname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              card_number,
              first_name,
              surname: value,
              cvc,
              phone,
              exp_date,
            };
            const result = onChange(modelFields);
            value = result?.surname ?? value;
          }
          if (errors.surname?.hasError) {
            runValidationTasks("surname", value);
          }
          setSurname(value);
        }}
        onBlur={() => runValidationTasks("surname", surname)}
        errorMessage={errors.surname?.errorMessage}
        hasError={errors.surname?.hasError}
        {...getOverrideProps(overrides, "surname")}
      ></TextField>
      <TextField
        label="Cvc"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cvc}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              card_number,
              first_name,
              surname,
              cvc: value,
              phone,
              exp_date,
            };
            const result = onChange(modelFields);
            value = result?.cvc ?? value;
          }
          if (errors.cvc?.hasError) {
            runValidationTasks("cvc", value);
          }
          setCvc(value);
        }}
        onBlur={() => runValidationTasks("cvc", cvc)}
        errorMessage={errors.cvc?.errorMessage}
        hasError={errors.cvc?.hasError}
        {...getOverrideProps(overrides, "cvc")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              card_number,
              first_name,
              surname,
              cvc,
              phone: value,
              exp_date,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Exp date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={exp_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              card_number,
              first_name,
              surname,
              cvc,
              phone,
              exp_date: value,
            };
            const result = onChange(modelFields);
            value = result?.exp_date ?? value;
          }
          if (errors.exp_date?.hasError) {
            runValidationTasks("exp_date", value);
          }
          setExp_date(value);
        }}
        onBlur={() => runValidationTasks("exp_date", exp_date)}
        errorMessage={errors.exp_date?.errorMessage}
        hasError={errors.exp_date?.hasError}
        {...getOverrideProps(overrides, "exp_date")}
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
