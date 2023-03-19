"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

function ClientSideRoute({
    children,
    route,

}: {
    children: React.ReactNode;
    route: string;

}) {
    return <Link href={route}>{children}</Link>
}

export default dynamic (() => Promise.resolve(ClientSideRoute), {ssr:false});