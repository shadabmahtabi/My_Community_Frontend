import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { FiLogOut } from "react-icons/fi";

const ProfileDialog = ({ isOpen, setIsOpen, handleLogout, handleGoToProfile }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile Options</DialogTitle>
          <DialogDescription>Choose an option</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white p-2 rounded"
          >
            <FiLogOut className="inline-block mr-2" />
            Logout
          </button>
          <button
            onClick={handleGoToProfile}
            className="w-full bg-primary text-white p-2 rounded mb-4"
          >
            Go to Profile
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
