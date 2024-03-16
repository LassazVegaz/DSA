import Graph from "../graphs/matrix/weighted-matrix-graph";
import PriorityQueue, { PriorityQueueType } from "../queue/priority-queue";
import Queue from "../queue/queue";

export type Path = {
  distance: number;
  closestNode: number;
};

type QueueData = Path & {
  nodeIndex: number;
};

const findShortestPaths = (g: Graph, origin: number): Path[] => {
  if (g.length === 0) return [];

  const shortestPaths: Path[] = [];
  shortestPaths[origin] = { distance: 0, closestNode: origin };

  const visited = new Set<number>();
  const q = new PriorityQueue<QueueData>(
    PriorityQueueType.min,
    (d) => d.distance,
    [{ nodeIndex: origin, distance: 0, closestNode: origin }]
  );

  while (!q.isEmpty()) {
    const n = q.dequeue()!;

    if (visited.has(n.nodeIndex)) continue;
    else visited.add(n.nodeIndex);

    for (let i = 0; i < g.length; i++) {
      if (g[n.nodeIndex][i] === undefined) continue;

      const weight = n.distance + g[n.nodeIndex][i].weight;

      if (
        shortestPaths[i] === undefined ||
        shortestPaths[i].distance > weight
      ) {
        q.enqueue({ nodeIndex: i, distance: weight, closestNode: n.nodeIndex });
        shortestPaths[i] = {
          distance: weight,
          closestNode: n.nodeIndex,
        };
      }
    }
  }

  return shortestPaths;
};

export default findShortestPaths;
