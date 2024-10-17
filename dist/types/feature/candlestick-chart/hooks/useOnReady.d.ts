import { Configuration, DataSource } from "@util/types";
/**
 * Signal we're loading while we wait for onReady call to resolve.
 * Also returns the configuration data from the onReady call.
 */
export declare function useOnReady(dataSource: DataSource): {
    ready: boolean;
    configuration: Configuration | null;
};
