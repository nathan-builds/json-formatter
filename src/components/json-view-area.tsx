'use client';
import { JsonViewer } from '@textea/json-viewer';
import { ScrollArea } from '@/components/ui/scroll-area';


export interface JsonViewAreaProps {
    jsonString: string;
}

const test = {
    'name': 'John',
    'age': 30,
    'cars': ['Ford', 'BMW', 'Fiat'],
    'address': {
        'street': '123 Main St',
        'city': 'Anytown',
        'state': 'CA',
        'postalCode': '12345'
    },
    'phoneNumbers': [
        { 'type': 'home', 'number': '123-456-7890' },
        { 'type': 'work', 'number': '098-765-4321' }
    ],
    'emailAddresses': ['john@example.com', 'john.doe@example.com'],
    'socialMediaProfiles': {
        'facebook': 'johndoe',
        'twitter': '@johndoe',
        'instagram': 'johndoe'
    }
};

export const JsonViewArea: React.FC<JsonViewAreaProps> = ({ jsonString }) => {
    return <div>
        <ScrollArea className="h-[600px] border-2 rounded-3xl">
            <JsonViewer value={jsonString} theme={'dark'} rootName={false} className="min-h-[600px]"
                        displayDataTypes={false}/>
        </ScrollArea>


    </div>;
};