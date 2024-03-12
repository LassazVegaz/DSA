import MatrixGraph from "./matrix-graph";

type WeightedMatrixGraph<T> = MatrixGraph<{ weight: number; data: T }>;

export default WeightedMatrixGraph;
