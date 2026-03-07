import { ReactNode } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AppDownloadModalContent } from "@/components/AppDownloadModal";

interface AppDownloadTriggerProps {
  children: ReactNode;
}

const AppDownloadTrigger = ({ children }: AppDownloadTriggerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <AppDownloadModalContent />
    </Dialog>
  );
};

export default AppDownloadTrigger;
