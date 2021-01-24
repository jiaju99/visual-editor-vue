export interface VisurlEditorBlockData {
    componentKey: string;  // 映射 VisualEditorConfig 中 componentMap 中的 component 对象
    top: number;  //组件top定位
    left: number;  // 组件left定位
    adjustPosition: boolean;  // 是否需要调整位置
    focus: boolean; // 当前是否为选中状态
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

export function createNewBlock({
    component,
    left,
    top
}: {
    component: VisualEditorComponent;
    left: number;
    top: number;
}) {
    return {
        top,
        left,
        componentKey: component!.key,
        adjustPosition: true,
        focus: false
    }
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


