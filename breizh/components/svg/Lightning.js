import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
    </svg>
`;

export default () => <SvgXml xml={xml} width="17.5" height="17.5"/>