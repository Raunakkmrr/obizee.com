import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface AppDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const APP_STORE_URL = "https://apps.apple.com/in/app/obizee/id6739462943";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.obizeee";
const APPLE_ICON_URL = "https://cdn.simpleicons.org/apple/111827";
const ANDROID_ICON_URL = "https://cdn.simpleicons.org/android/15803D";

export const AppDownloadModalContent = () => {
  return (
    <DialogContent className="max-w-md overflow-hidden rounded-3xl border border-orange-100/80 bg-gradient-to-br from-white via-orange-50/40 to-emerald-50/30 p-0 shadow-2xl">
      <div className="border-b border-orange-100/70 bg-gradient-to-r from-orange-100 to-amber-50 px-6 py-6 text-gray-900">
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="text-2xl font-bold text-gray-900">Get oBizee App</DialogTitle>
          <DialogDescription className="text-gray-600">
            Run your business from your phone. Download now.
          </DialogDescription>
        </DialogHeader>
      </div>

      <div className="space-y-3 px-6 pb-6 pt-5">
        <Button
          asChild
          className="h-12 w-full rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-50"
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download oBizee from Apple App Store"
          >
            <img src={APPLE_ICON_URL} alt="Apple icon" className="mr-2 h-5 w-5 object-contain" loading="lazy" />
            Download on the App Store
          </a>
        </Button>

        <Button
          asChild
          className="h-12 w-full rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 shadow-sm hover:bg-emerald-100"
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download oBizee from Google Play Store"
          >
            <img src={ANDROID_ICON_URL} alt="Android icon" className="mr-2 h-5 w-5 object-contain" loading="lazy" />
            Get it on Google Play
          </a>
        </Button>

        <p className="flex items-center justify-center pt-1 text-center text-sm text-gray-500">
          <Smartphone className="mr-1.5 h-4 w-4 text-orange-500" aria-hidden="true" />
          Best experience on mobile app
        </p>
      </div>
    </DialogContent>
  );
};

const AppDownloadModal = ({ open, onOpenChange }: AppDownloadModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AppDownloadModalContent />
    </Dialog>
  );
};

export default AppDownloadModal;
