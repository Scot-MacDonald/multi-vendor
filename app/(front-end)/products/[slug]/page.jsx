import Breadcrumb from "@/app/components/frontend/breadcrumb";
import { ShoppingCart } from "lucide-react";
import CategoryCarousel from "@/app/components/frontend/CategoryCarousel";
import React from "react";
import { getData } from "@/lib/getData";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { Tag, Minus, Plus } from "lucide-react";


export default async function ProductDetailPage({params:{slug}}) {
    const category = await getData("/categories/668e6b15ed2307271cf7bf43")
    return (
        <div>
            <Breadcrumb />
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <Image src = "/weed.jpeg" alt = "weed" width ={500} height = {500} className = "w-full" />
                </div>
                <div className="col-span-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl lg:text-3xl font-semibold">Veggies</h2>
                        <button>
                            <Share2/>   
                        </button>
                    </div>
                    <div className="border-b border-dashed border-gray-900/25">
                    <p className="py-2">This is a sample text to see the product page. Hope it's working.
                        This is a sample text to see the product page. Hope it's working.</p>
                    <div className="flex items-center gap-8 mb-4">
                        <p>SKU: 1234567</p>
                        <p className="bg-lime-100 py-1.5 px-4 rounded-full text-slate-900 "><b>Stock</b>: 199</p>
                    </div>
                    
                    </div>
                    <div className="flex items-center justify-between gap-4 pt-4 border-b border-dashed border-gray-900/25 pb-4">
                        <div className="flex flex items-center gap-4">
                        <h4 className="text-2xl">€49</h4>
                        <del className="text-slate-400 text-sm">€490</del>
                        </div>
                        <p className="flex items-center">
                            <Tag className="w-5 h-5 text-slate-400 me-2"/>
                            <span>Save 90% now</span>
                        </p>
                    </div>
                    <div className="flex justify-between items-center py-6">
                        <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
                            <button className="border-r border-gray-400 py-2 px-4">
                                <Minus/>
                            </button>
                            <p className="flex-grow py-2 px-4">1</p>
                            <button className="border-l border-gray-400 py-2 px-4">
                                <Plus/>
                            </button>
                        </div>
                        <button className="flex items-center space-x-2">
                            <ShoppingCart />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-3 hidden md:block border border-dashed border-gray-900/25 dark:border-[#666666] rounded-md overflow-hidden">
                    <h2 className=" py-4 px-6">Delivery and Returns</h2>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-700 p-4">
                <h2 className="mb-4">Similar Products</h2>
                <CategoryCarousel products={category.products} />
            </div>
        </div>
    )
}


