/* eslint-disable no-restricted-globals */
import axios from "axios";
import { useSnackbar } from "notistack";
import _ from "lodash";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useQueryFetchGet = (
  fetchUrl: string,
  queryKey: any[],
  token?: string,
  setFn?: Dispatch<SetStateAction<any>>,
  enableFetch?: boolean,
  refetchInterval?: number,
  refetchOnWindowFocus?: boolean,
  cacheTime?: number,
  onSuccess?: (ar: any) => void,
  onError?: (ar: any) => void
) => {
  const { enqueueSnackbar } = useSnackbar();
  const { status, data, isFetching, refetch, isError } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const data = await axios.get(fetchUrl);
      const json = data.data;
      return json;
    },
    onSuccess: onSuccess
      ? onSuccess
      : (data: any) => {
          // If status if success then assgin the datasource
          if (data?.status === "FAILURE") {
            enqueueSnackbar("Fail to load data to data grid.", {
              variant: "error",
            });
          } else if (data?.status === "SUCCESS") {
            console.log("Success", data);
            if (_.isArray(data?.data)) {
              if (setFn) setFn(data?.data);
            }
          }
        },
    onError: onError
      ? onError
      : (error: any) => {
          enqueueSnackbar("There was a error to fetch the data.", {
            variant: "error",
            preventDuplicate: true,
          });
        },
    refetchInterval: refetchInterval ? refetchInterval : 300000,
    refetchOnWindowFocus: refetchOnWindowFocus ? refetchOnWindowFocus : false,
    cacheTime: cacheTime ? cacheTime : 5000,
    enabled: enableFetch ? enableFetch : false,
  });

  return { status, data, isFetching, isError, refetch };
};

export const useQueryFetchPost = (
  fetchUrl: string,
  queryKey: any[],
  token?: string,
  setFn?: Dispatch<SetStateAction<any>>,
  enableFetch?: boolean,
  refetchInterval?: number,
  refetchOnWindowFocus?: boolean,
  cacheTime?: number,
  onSuccess?: (ar: any) => void,
  onError?: (ar: any) => void
) => {
  const { enqueueSnackbar } = useSnackbar();
  const { status, data, isFetching, refetch, isError } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const data = await axios.post(fetchUrl, _);
      const json = data.data;
      return json;
    },
    onSuccess: onSuccess
      ? onSuccess
      : (data: any) => {
          // If status if success then assgin the datasource
          if (data?.status === "FAILURE") {
            enqueueSnackbar("Fail to load data to data grid.", {
              variant: "error",
            });
          } else if (data?.status === "SUCCESS") {
            console.log("Success", data);
            if (_.isArray(data?.data)) {
              if (setFn) setFn(data?.data);
            }
          }
        },
    onError: onError
      ? onError
      : (error: any) => {
          enqueueSnackbar("There was a error to fetch the data.", {
            variant: "error",
            preventDuplicate: true,
          });
        },
    refetchInterval: refetchInterval ? refetchInterval : 300000,
    refetchOnWindowFocus: refetchOnWindowFocus ? refetchOnWindowFocus : false,
    cacheTime: cacheTime ? cacheTime : 5000,
    enabled: enableFetch ? enableFetch : false,
  });

  return { status, data, isFetching, isError, refetch };
};

export const useQueryPostMutation = (
  fetchUrl: string,
  queryKey: any[],
  refetch?: () => void,
  onSuccessFunction?: any,
  onErrorFunction?: any
) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const addParam = async (addingParam?: any) => {
    return await axios.post(fetchUrl as string, addingParam);
  };

  return useMutation({
    mutationFn: addParam,
    onSuccess: onSuccessFunction
      ? onSuccessFunction
      : (data: any) => {
          console.log("Sucess", data);
          // If status if success then assgin the datasource
          if (data?.data?.status === "Fail") {
            enqueueSnackbar(data?.data?.message, {
              variant: "error",
            });
            return;
          } else if (data?.data?.status === "Success") {
            enqueueSnackbar(data?.data?.message, {
              variant: "success",
            });
            if (refetch) refetch();
          }
          queryClient.invalidateQueries({ queryKey });
        },
    onError: onErrorFunction
      ? onErrorFunction
      : () => {
          enqueueSnackbar("Fetch error", {
            variant: "error",
          });
        },
  });
};

export const useQueryPutMutation = (
  fetchUrl: string,
  queryKey: any[],
  refetch?: () => void,
  onSuccessFunction?: any,
  onErrorFunction?: any
) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const addParam = async (addingParam?: any) => {
    return await axios.post(fetchUrl as string, addingParam);
  };

  return useMutation({
    mutationFn: addParam,
    onSuccess: onSuccessFunction
      ? onSuccessFunction
      : (data: any) => {
          console.log("Sucess", data);
          // If status if success then assgin the datasource
          if (data?.data?.status === "Fail") {
            enqueueSnackbar(data?.data?.message, {
              variant: "error",
            });
            return;
          } else if (data?.data?.status === "Success") {
            enqueueSnackbar(data?.data?.message, {
              variant: "success",
            });
            if (refetch) refetch();
          }
          queryClient.invalidateQueries({ queryKey });
        },
    onError: onErrorFunction
      ? onErrorFunction
      : () => {
          enqueueSnackbar("Fetch error", {
            variant: "error",
          });
        },
  });
};

export const useQueryDeleteMutation = (
  fetchUrl: string,
  queryKey: any[],
  refetch?: () => void,
  onSuccessFunction?: any,
  onErrorFunction?: any,
  addingParam?: any
) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const addParam = async () => {
    return await axios.delete(fetchUrl as string);
  };

  return useMutation({
    mutationFn: addParam,
    onSuccess: onSuccessFunction
      ? onSuccessFunction
      : (data: any) => {
          console.log("Sucess", data);
          // If status if success then assgin the datasource
          if (data?.data?.status === "Fail") {
            enqueueSnackbar(data?.data?.message, {
              variant: "error",
            });
            return;
          } else if (data?.data?.status === "Success") {
            enqueueSnackbar(data?.data?.message, {
              variant: "success",
            });
            if (refetch) refetch();
          }
          queryClient.invalidateQueries({ queryKey });
        },
    onError: onErrorFunction
      ? onErrorFunction
      : () => {
          enqueueSnackbar("Fetch error", {
            variant: "error",
          });
        },
  });
};
