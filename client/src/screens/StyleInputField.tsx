import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete, {
    AutocompleteChangeReason,
} from '@mui/material/Autocomplete';

export default function StyleDropdown({
    styleValue,
    handleChangeStyleValue,
}: any) {
    const onChange = (
        _event: React.SyntheticEvent<EventTarget>,
        newValue: string | null,
        _reason: AutocompleteChangeReason
    ) => {
        return handleChangeStyleValue(newValue === null ? '' : newValue);
    };
    return (
        <Stack spacing={2} sx={{ width: 400 }}>
            <Autocomplete
                id='style dropdown'
                inputValue={styleValue}
                freeSolo={true}
                options={definedMusicStyles.map((option) => option.style)}
                onChange={onChange}
                renderInput={(params) => (
                    <TextField value={styleValue} {...params} label='Style*' />
                )}
            />
        </Stack>
    );
}

const definedMusicStyles = [
    { style: 'Psych-Rock' },
    { style: 'Psych-Pop' },
    { style: 'Latin' },
    { style: 'Traditional' },
    { style: 'Indie Rock' },
    { style: 'Regge Jazz' },
    { style: 'Electro jazz' },
    { style: 'Electro' },
    { style: 'Laid back groove' },
    { style: '80s Pop' },
    { style: 'Bebop' },
    { style: 'Jazz' },
    { style: 'Psych-Folk' },
    { style: 'RnB' },
    { style: 'Funk/Soul' },
    { style: 'Funk/Disco' },
];
