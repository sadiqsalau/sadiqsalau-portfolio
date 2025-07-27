import { useCallback } from "react";
import { useLocation, useNavigate, type NavigateOptions } from "react-router";

export default function useNavigateBack() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = useCallback(
    (options?: NavigateOptions) => {
      if (location.key !== "default") {
        return navigate(-1);
      } else {
        return navigate("/", options);
      }
    },
    [location, navigate]
  );

  return navigateBack;
}
