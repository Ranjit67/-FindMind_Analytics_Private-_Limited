import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
;

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

 function CheckboxLabels(t) {
  const [state, setState] = React.useState({
   
    checkedG: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({checkedG: event.target.checked });
  };

  return (
   
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
      />
  );
}
export default CheckboxLabels;