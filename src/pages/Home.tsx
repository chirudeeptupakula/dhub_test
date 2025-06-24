import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Welcome to DHub
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Explore your dashboard, manage content, and collaborate with ease.
        </p>
        <Button asChild className="text-lg px-6 py-4">
          <Link to="/about">Learn More</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-slate-600">
              Tailwind + ShadCN make it super fast to build modern UI.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-slate-600">
              Enjoy accessible, customizable, and clean components.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
