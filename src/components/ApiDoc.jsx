'use client';

import { ApiReference as VueComponent } from '@scalar/api-reference';
import { useState } from 'react';
import { useEffect } from 'react';
import { applyVueInReact } from 'veaury';
const ApiReference = applyVueInReact(VueComponent);

export default function ApiDoc({ apiUrl }) {
    const [isBrowser, setBrowser] = useState(false);
    useEffect(() => {
        setBrowser(true)
    }, [isBrowser])
    return (
        <>
        {isBrowser && (
            <ApiReference
            configuration={{
                spec: { url: apiUrl },
                darkMode: true,
                isEditable: false,
            }}
            />
        )}
        </>
  );
}

