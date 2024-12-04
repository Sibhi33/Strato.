import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from 'chart.js';
import Confetti from 'react-confetti';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [reports, setReports] = useState([
    {
      id: "REPORT001",
      title: "Quarterly Performance Report",
      date: "2024-04-15",
      status: "Completed",
    },
    {
      id: "REPORT002",
      title: "Annual Review",
      date: "2024-01-22",
      status: "In Progress",
    },
    {
      id: "REPORT003",
      title: "User Engagement Analysis",
      date: "2024-03-10",
      status: "Pending",
    },
  ]);

  const [confetti, setConfetti] = useState(false);

  const filteredReports = reports.filter(report =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [400, 450, 300, 500, 600],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'User Growth',
        data: [200, 250, 300, 350, 400],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Active', 'Inactive', 'Pending'],
    datasets: [
      {
        label: 'Subscription Status',
        data: [60, 25, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleSaveReportClick = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 3000); // Hide confetti after 3 seconds
    setOpen(false); // Close the sheet after saving
  };

  return (
    <div className='m-4 p-6'>
      {confetti && <Confetti />}
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Reports</CardTitle>
          <div className='flex items-center gap-2'>
            <Input
              placeholder="Search Reports..."
              className='w-64'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={() => setOpen(true)}>
              <Plus /> Add Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Report ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.id}</TableCell>
                    <TableCell>{report.title}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.status}</TableCell>
                    <TableCell>
                      <span className='w-full h-full flex justify-center items-center gap-3'>
                        <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' />
                        <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' />
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className='text-center'>No reports found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className='grid gap-4 mt-6'>
        <Card className='shadow-sm shadow-primary'>
          <CardHeader>
            <CardTitle>Revenue Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={barChartData} />
          </CardContent>
        </Card>
        <Card className='shadow-sm shadow-primary'>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={lineChartData} />
          </CardContent>
        </Card>
        <Card className='shadow-sm shadow-primary'>
          <CardHeader>
            <CardTitle>Subscription Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={pieChartData} />
          </CardContent>
        </Card>
      </div>

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Report</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="title">Title</Label>
              <Input id="title" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="status">Status</Label>
              <Input id="status" placeholder="e.g., Completed, In Progress, Pending" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="button" className='w-1/2' onClick={handleSaveReportClick}>Save Report</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Reports;
