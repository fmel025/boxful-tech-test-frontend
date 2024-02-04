import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';

// DatePicker used to work with momentjs
export const CustomDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);