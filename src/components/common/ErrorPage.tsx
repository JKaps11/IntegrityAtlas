import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { P } from "../ui/typography";

interface ErrorsPageProps {
  title: string;
  message: string;
  backUrl?: string;
}

export default function ErrorsPage({
  title,
  message,
  backUrl = "/authenticated",
}: ErrorsPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <P>{message}</P>
          <P>Please conact our support team:</P>
          <Link  href={`mailto:improveyourselfhelp@gmail.com`}>improveyourselfhelp@gmail.com</Link>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link href={backUrl}>
            <Button variant="outline">Go Back</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
