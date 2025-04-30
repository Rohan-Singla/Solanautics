// components/pool-card-skeleton.tsx
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PoolCardSkeletonProps {
 isDarkMode: boolean;
}

export function PoolCardSkeleton({ isDarkMode }: PoolCardSkeletonProps) {
 return (
 <Card className={`w-full ${isDarkMode ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"}`}>
 <CardHeader className="pb-2 px-4 pt-4">
 <div className="flex justify-between items-start">
 <div className="h-6 w-24 bg-gray-700/50 animate-pulse rounded"></div>
 <div className="h-10 w-10 bg-gray-700/50 animate-pulse rounded-full"></div>
 </div>
 </CardHeader>
 <CardContent className="px-4 pb-4">
 <div className="space-y-3">
 <div className="grid grid-cols-2 gap-2">
 <div>
 <div className="h-4 w-16 bg-gray-700/50 animate-pulse rounded mb-1"></div>
 <div className="h-5 w-20 bg-gray-700/50 animate-pulse rounded"></div>
 </div>
 <div>
 <div className="h-4 w-16 bg-gray-700/50 animate-pulse rounded mb-1"></div>
 <div className="h-5 w-20 bg-gray-700/50 animate-pulse rounded"></div>
 </div>
 </div>
 <div>
 <div className="h-4 w-16 bg-gray-700/50 animate-pulse rounded mb-1"></div>
 <div className="h-5 w-24 bg-gray-700/50 animate-pulse rounded"></div>
 </div>
 <div>
 <div className="h-4 w-16 bg-gray-700/50 animate-pulse rounded mb-1"></div>
 <div className="h-5 w-28 bg-gray-700/50 animate-pulse rounded"></div>
 </div>
 <div>
 <div className="h-4 w-16 bg-gray-700/50 animate-pulse rounded mb-1"></div>
 <div className="h-5 w-20 bg-gray-700/50 animate-pulse rounded"></div>
 </div>
 </div>
 </CardContent>
 </Card>
 );
}