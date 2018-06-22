import { createComponent, customMap } from 'redux-form-antd';
import { Input } from 'antd';

function mapFunction(mapProps, { input: { onChange } }) {
  return {
    ...mapProps,
    onChange: event => onChange(event.nativeEvent.target.value),
  };
}
const textFieldMap = customMap(mapFunction);

export const TextAreaField = createComponent(Input.TextArea, textFieldMap);
export default TextAreaField;
