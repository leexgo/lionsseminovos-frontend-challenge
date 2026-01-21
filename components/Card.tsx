"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle } from "lucide-react";
import { CarCardProps } from "@/data/db";

export function CarCard({ data }: CarCardProps) {
  const handleWhatsAppClick = () => {
    const phone = "558004540505";
    const message = `Olá! Tenho interesse no ${data.brand} ${data.model} (${data.year}) que vi no catálogo.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={data.image}
          alt={`${data.brand} ${data.model}`}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-900">
          {data.year}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
          {data.brand}
        </div>
        <CardTitle className="text-xl line-clamp-1">{data.model}</CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-2xl font-bold text-red-700">R$ {data.price}</p>

        <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          <span>Modelo {data.year}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-red-500 hover:bg-red-400 text-white border-none flex gap-2"
        >
          <MessageCircle className="h-4 w-4 fill-current" />
          Chamar no WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
}
