import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import React from 'react';
import { number } from 'prop-types';

const FONT_SIZES = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

export interface FontSizeChooserProps {
    onFontSizeChange: (size: number) => void;
}

export const FontSizeChooser: React.FC<FontSizeChooserProps> = ({ onFontSizeChange }) => {

    const [value, setValue] = React.useState(18);
    const [open, setOpen] = React.useState(false);

    const onFontSizeCLick = (size: number) => {
        setValue(size);
        setOpen(false);
        onFontSizeChange(size);
    };

    return (<Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
                variant={'ghost'}
                aria-expanded={open}
                role="combobox"
                className="w-[90px] justify-between">
                {`${value}pt`}
                <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50"/>

            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[60px] p-0">
            <Command>
                <CommandGroup>
                    {FONT_SIZES.map((size, idx) =>
                        (<CommandItem key={idx}
                                      onSelect={() => onFontSizeCLick(size)}>{size}</CommandItem>))}
                </CommandGroup>
            </Command>
        </PopoverContent>
    </Popover>);
};