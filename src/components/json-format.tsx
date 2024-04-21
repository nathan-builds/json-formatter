'use client';


import React, { useEffect, useState } from 'react';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useToast } from '@/components/ui/use-toast';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { DownloadIcon, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FontSizeChooser } from '@/components/font-size-chooser';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';


export const JsonFormat = () => {

    const [text, setText] = useState('');
    const [fontSize, setFontSize] = useState(12);
    const [liveFormatting, setLiveFormatting] = useState(true);
    const { theme } = useTheme();


    const fontSizeTheme = EditorView.theme({
        '&': {
            fontSize: `${fontSize}px` // Set the font size
        }
    });

    const { toast } = useToast();

    const onTextChange = (json: string) => {
        if (!liveFormatting) {
            setText(json);
            return;
        }
        formatJSON(json);

    };

    const formatJSON = (json: string) => {
        try {
            const obj = JSON.parse(json); // Parse the text to an object
            const formatted = JSON.stringify(obj, null, 2); // Stringify the object with indentation
            setText(formatted);
        } catch (error) {
            let err = error as { message: string };
            toast({
                title: 'Invalid JSON',
                description: err.message,
                variant: 'destructive'
            });
            console.error(err.message);
            setText(json);
        }
    };

    const fontSizeChange = (size: number) => {
        setFontSize(size);
    };

    return (
        <Card className="flex flex-col items-center border-none min-h-screen">

            <div className="flex  w-3/4  gap-5 h-10 items-center justify-between p-1 ">
                <div className="flex items-center space-x-2 ">
                    <Switch checked={liveFormatting} onClick={() => setLiveFormatting(!liveFormatting)}/>
                    <Label htmlFor="airplane-mode">Live formatting</Label>
                </div>
                <div className="flex items-center">
                    {/*<Button variant="ghost">*/}
                    {/*    <DownloadIcon/>*/}
                    {/*</Button>*/}
                    <Button variant="ghost">
                        <TrashIcon onClick={() => setText('')}/>
                    </Button>
                    <FontSizeChooser onFontSizeChange={fontSizeChange}/>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-10 w-full">
                <div className="m-5 w-3/4   rounded-lg border-[1px] ">
                    <CodeMirror
                        className="p-2"
                        value={text}
                        onChange={onTextChange}
                        extensions={[json(), EditorView.lineWrapping, fontSizeTheme]}
                         height={'80vh'}
                        theme={theme === 'light' ? 'light' : 'dark'}

                    />
                </div>

            </div>
            <Button className="self-center w-28 mb-10" onClick={() => formatJSON(text)}>Format JSON</Button>
        </Card>

    );
};

