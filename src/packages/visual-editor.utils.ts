export interface VisurlEditorBlockData {
    top: number;
    left: number;
}

export interface VisualEditorModelValue {
    container: {
        width: number;
        height: number;
    };
    blocks: VisurlEditorBlockData[];
}

export interface VisualEditorComponent {
    key: string;
    label: string;
    preview: () => JSX.Element;
    render: () => JSX.Element;
}

export function createVisualEditorConfig() {
    const componentList: VisualEditorComponent[] = []
    const componentMap: Record<string, VisualEditorComponent> = {}


    return {
        componentList,
        componentMap,
        registry: (key: string, component: Omit<VisualEditorComponent, 'key'>) => {
            const comp = { ...component, key }
            componentList.push(comp)
            componentMap[key] = comp
        },

    }
}

export type VisualEditorConfig = ReturnType<typeof createVisualEditorConfig>;


