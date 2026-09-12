import {getProject} from '$lib/data/projectsList.js';

export function load({url})
{
    const id = url.pathname.split('/').filter(Boolean).pop();

    const project = getProject(id ?? '');

    return { project };
}