import React, { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';

function App() {
    const [length, setLength] = useState(8);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);
    const [password, setPassword] = useState('');

    let passwordRef = useRef(null);
    let copyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);

    let generatePassword = useCallback(() => {
        let pass = '';
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numbersAllowed) str += 1234567890;
        if (charactersAllowed) str += '@#$%^&*!~?><_-';

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numbersAllowed, charactersAllowed, setPassword]);

    useEffect(() => {
        generatePassword();
    }, [length, numbersAllowed, charactersAllowed, setPassword]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl font-bold mb-10 text-center">
                    Password Generator
                </h1>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        readOnly
                        placeholder="Password"
                        value={password}
                        ref={passwordRef}
                        className="border border-gray-300 mb-2 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Copy
                    </button>
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="length"
                            className="mt-4 text-sm font-medium"
                        >
                            Length: {length}
                        </label>
                        <input
                            type="range"
                            min={8}
                            max={40}
                            id="length"
                            value={length}
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                            className="w-full bg-gray-200 rounded-md appearance-none"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="checkbox"
                            id="numbers"
                            defaultChecked={numbersAllowed}
                            onChange={() => {
                                setNumbersAllowed((prev) => !prev);
                            }}
                            className="text-blue-500"
                        />
                        <label htmlFor="numbers" className="text-sm">
                            Numbers
                        </label>
                        <input
                            type="checkbox"
                            id="characters"
                            defaultChecked={charactersAllowed}
                            onChange={() => {
                                setCharactersAllowed((prev) => !prev);
                            }}
                            className="text-blue-500"
                        />
                        <label htmlFor="characters" className="text-sm">
                            Characters
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
