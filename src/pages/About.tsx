import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">About DHub</h1>
        <p className="text-slate-600 mb-6">
          DHub is a collaborative platform built with React, Tailwind, and ShadCN UI.
        </p>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Why DHub?</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Responsive and accessible UI</li>
              <li>Customizable design system</li>
              <li>Powered by Tailwind and ShadCN</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
