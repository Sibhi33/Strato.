import React, { useState } from 'react';
import Confetti from 'react-confetti';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    // Sample user data
    {
      id: "USER001",
      name: "John Doe",
      role: "Student",
      subscriptionStatus: "Active",
    },
    {
      id: "USER002",
      name: "Jane Smith",
      role: "Teacher",
      subscriptionStatus: "Inactive",
    },
    {
      id: "USER003",
      name: "Alice Johnson",
      role: "Admin",
      subscriptionStatus: "Active",
    },
    // Add more sample users as needed
  ]);

  const [showConfetti, setShowConfetti] = useState(false);

  // Sample roles
  const roles = ["Student", "Teacher", "Admin"];

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle user addition
  const handleAddUser = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
    setOpen(false);
  };

  // Confirm delete action
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className='m-4 p-6'>
      {showConfetti && <Confetti />}
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Manage Users</CardTitle>
          <div className='flex items-center gap-2'>
            <Input
              placeholder="Search Users..."
              className='w-64'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={() => setOpen(true)}>
              <Plus /> Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">User ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.subscriptionStatus}</TableCell>
                    <TableCell>
                      <span className='w-full h-full flex justify-center items-center gap-3'>
                        <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' />
                        <TrashIcon 
                          className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' 
                          onClick={() => handleDelete(user.id)}
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className='text-center'>No users found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className='flex justify-between items-center p-4'>
          <div className='text-gray-600'>
            Total Users: {filteredUsers.length}
          </div>
          <Button variant="outline" onClick={() => { /* Handle export logic */ }}>
            Export Users
          </Button>
        </CardFooter>
      </Card>

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add User</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="username">Username</Label>
              <Input id="username" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="role">Role</Label>
              <select id="role" className="p-2 border border-gray-300 rounded">
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" className='w-1/2' onClick={handleAddUser}>Save User</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminUsers;
