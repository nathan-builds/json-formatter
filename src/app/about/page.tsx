import { Card } from '@/components/ui/card';

export default function About() {

    return (
        <Card className="flex flex-col border-none rounded-none shadow-none self-center">
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">About JSON Formatter</h1>
                <p className="mb-4">
                    JSON Formatter is a tool that helps developers format and validate their JSON data. It&apos;s
                    designed to
                    be easy to use, efficient, and reliable.
                </p>
                <h2 className="text-xl font-bold mb-2">What is JSON?</h2>
                <p className="mb-4">
                    JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans
                    to read and write and easy for machines to parse and generate.
                </p>
                <h2 className="text-xl font-bold mb-2">Why use a JSON Formatter?</h2>
                <p className="mb-4">
                    A JSON Formatter can help you quickly format your JSON data to make it easier to read and debug. It
                    can also validate your JSON data to ensure it&apos;s correctly structured.
                </p>
            </div>
        </Card>
    );
}