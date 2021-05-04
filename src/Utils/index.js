import React from 'react';
import CurrencyInput from 'react-native-currency-input';

function Mask() {
  const [value, setValue] = React.useState(2310.458); // can also be null

  return (
    <CurrencyInput
      value={value}
      onChangeValue={setValue}
      unit="$"
      delimiter=","
      separator="."
      precision={2}
      onChangeText={(formattedValue) => {
        console.log(formattedValue); // $2,310.46
      }}
    />
  );
}
export default Mask;
