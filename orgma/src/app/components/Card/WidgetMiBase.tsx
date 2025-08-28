'use client';
import { useEffect } from 'react';

interface WidgetMiBaseProps {
    url: string;
}

export default function WidgetMiBase({ url }: WidgetMiBaseProps) {
    useEffect(() => {
        // Подключаем скомпилированный JS виджета
        const script = document.createElement('script');
        script.src = '/WidgetMiBase.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="widgetMiBase" className="widget-mi-base" data-url={url}></div>;
}
