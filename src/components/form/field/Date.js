import moment from 'moment';
import { withProps } from 'recompose';
import Input from './Input';

const format = (value) => {
    if (!value) {
        return '';
    }

    const date = moment(value, 'YYYY-MM-DD');

    if (date.isValid()) {
        return date.format('YYYY-MM-DD');
    }

    return value;
};

const parse = (value) => {
    if ('' === value) {
        return null;
    }

    return value;
};

const Date = withProps({
    format,
    parse,
    type: 'date',
})(Input);

export default Date;
