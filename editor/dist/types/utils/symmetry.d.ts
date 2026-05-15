import type { Point } from '@dreamteamapp/orbkit';
/**
 * Compute symmetrical positions for all orbs around center (0.5, 0.5).
 * When one orb is dragged, all others maintain equal angular spacing
 * at the same radius from center.
 */
export declare function computeSymmetricalPositions(movedPosition: Point, orbCount: number, movedIndex: number): Point[];
//# sourceMappingURL=symmetry.d.ts.map