
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface GetStartedSuccessProps {
  onClose: () => void;
}

const GetStartedSuccess = ({ onClose }: GetStartedSuccessProps) => {
  return (
    <div className="flex flex-col items-center text-center py-8">
      <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 mb-6">
        <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
      </div>
      <h3 className="text-2xl font-bold mb-3">Thanks for Reaching Out!</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
        Your information has been successfully submitted. Our team will review your request and contact you shortly to discuss how TyrianAI can help your business.
      </p>
      <Button onClick={onClose} className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
        Close
      </Button>
    </div>
  );
};

export default GetStartedSuccess;
