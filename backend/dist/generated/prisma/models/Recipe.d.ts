import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RecipeModel = runtime.Types.Result.DefaultSelection<Prisma.$RecipePayload>;
export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null;
    _avg: RecipeAvgAggregateOutputType | null;
    _sum: RecipeSumAggregateOutputType | null;
    _min: RecipeMinAggregateOutputType | null;
    _max: RecipeMaxAggregateOutputType | null;
};
export type RecipeAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type RecipeSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type RecipeMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    ingredients: string | null;
    userId: number | null;
};
export type RecipeMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    ingredients: string | null;
    userId: number | null;
};
export type RecipeCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    ingredients: number;
    userId: number;
    _all: number;
};
export type RecipeAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type RecipeSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type RecipeMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    ingredients?: true;
    userId?: true;
};
export type RecipeMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    ingredients?: true;
    userId?: true;
};
export type RecipeCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    ingredients?: true;
    userId?: true;
    _all?: true;
};
export type RecipeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    cursor?: Prisma.RecipeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RecipeCountAggregateInputType;
    _avg?: RecipeAvgAggregateInputType;
    _sum?: RecipeSumAggregateInputType;
    _min?: RecipeMinAggregateInputType;
    _max?: RecipeMaxAggregateInputType;
};
export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
    [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecipe[P]> : Prisma.GetScalarType<T[P], AggregateRecipe[P]>;
};
export type RecipeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithAggregationInput | Prisma.RecipeOrderByWithAggregationInput[];
    by: Prisma.RecipeScalarFieldEnum[] | Prisma.RecipeScalarFieldEnum;
    having?: Prisma.RecipeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecipeCountAggregateInputType | true;
    _avg?: RecipeAvgAggregateInputType;
    _sum?: RecipeSumAggregateInputType;
    _min?: RecipeMinAggregateInputType;
    _max?: RecipeMaxAggregateInputType;
};
export type RecipeGroupByOutputType = {
    id: number;
    title: string;
    description: string | null;
    ingredients: string;
    userId: number;
    _count: RecipeCountAggregateOutputType | null;
    _avg: RecipeAvgAggregateOutputType | null;
    _sum: RecipeSumAggregateOutputType | null;
    _min: RecipeMinAggregateOutputType | null;
    _max: RecipeMaxAggregateOutputType | null;
};
type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecipeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecipeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecipeGroupByOutputType[P]>;
}>>;
export type RecipeWhereInput = {
    AND?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    OR?: Prisma.RecipeWhereInput[];
    NOT?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    id?: Prisma.IntFilter<"Recipe"> | number;
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    ingredients?: Prisma.StringFilter<"Recipe"> | string;
    userId?: Prisma.IntFilter<"Recipe"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type RecipeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    ingredients?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    OR?: Prisma.RecipeWhereInput[];
    NOT?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    ingredients?: Prisma.StringFilter<"Recipe"> | string;
    userId?: Prisma.IntFilter<"Recipe"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type RecipeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    ingredients?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.RecipeCountOrderByAggregateInput;
    _avg?: Prisma.RecipeAvgOrderByAggregateInput;
    _max?: Prisma.RecipeMaxOrderByAggregateInput;
    _min?: Prisma.RecipeMinOrderByAggregateInput;
    _sum?: Prisma.RecipeSumOrderByAggregateInput;
};
export type RecipeScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecipeScalarWhereWithAggregatesInput | Prisma.RecipeScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecipeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecipeScalarWhereWithAggregatesInput | Prisma.RecipeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Recipe"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
    ingredients?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"Recipe"> | number;
};
export type RecipeCreateInput = {
    title: string;
    description?: string | null;
    ingredients: string;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
};
export type RecipeUncheckedCreateInput = {
    id?: number;
    title: string;
    description?: string | null;
    ingredients: string;
    userId: number;
};
export type RecipeUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
};
export type RecipeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RecipeCreateManyInput = {
    id?: number;
    title: string;
    description?: string | null;
    ingredients: string;
    userId: number;
};
export type RecipeUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RecipeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RecipeListRelationFilter = {
    every?: Prisma.RecipeWhereInput;
    some?: Prisma.RecipeWhereInput;
    none?: Prisma.RecipeWhereInput;
};
export type RecipeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RecipeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    ingredients?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RecipeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RecipeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    ingredients?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RecipeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    ingredients?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RecipeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RecipeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput | Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput | Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutUserInput | Prisma.RecipeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type RecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput | Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput | Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutUserInput | Prisma.RecipeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type RecipeCreateWithoutUserInput = {
    title: string;
    description?: string | null;
    ingredients: string;
};
export type RecipeUncheckedCreateWithoutUserInput = {
    id?: number;
    title: string;
    description?: string | null;
    ingredients: string;
};
export type RecipeCreateOrConnectWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput>;
};
export type RecipeCreateManyUserInputEnvelope = {
    data: Prisma.RecipeCreateManyUserInput | Prisma.RecipeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutUserInput, Prisma.RecipeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput>;
};
export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutUserInput, Prisma.RecipeUncheckedUpdateWithoutUserInput>;
};
export type RecipeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RecipeScalarWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyWithoutUserInput>;
};
export type RecipeScalarWhereInput = {
    AND?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
    OR?: Prisma.RecipeScalarWhereInput[];
    NOT?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
    id?: Prisma.IntFilter<"Recipe"> | number;
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    ingredients?: Prisma.StringFilter<"Recipe"> | string;
    userId?: Prisma.IntFilter<"Recipe"> | number;
};
export type RecipeCreateManyUserInput = {
    id?: number;
    title: string;
    description?: string | null;
    ingredients: string;
};
export type RecipeUpdateWithoutUserInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RecipeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RecipeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RecipeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    ingredients?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    ingredients?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    ingredients?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    ingredients?: boolean;
    userId?: boolean;
};
export type RecipeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "ingredients" | "userId", ExtArgs["result"]["recipe"]>;
export type RecipeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RecipeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RecipePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Recipe";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string | null;
        ingredients: string;
        userId: number;
    }, ExtArgs["result"]["recipe"]>;
    composites: {};
};
export type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecipePayload, S>;
export type RecipeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecipeCountAggregateInputType | true;
};
export interface RecipeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Recipe'];
        meta: {
            name: 'Recipe';
        };
    };
    findUnique<T extends RecipeFindUniqueArgs>(args: Prisma.SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RecipeFindFirstArgs>(args?: Prisma.SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RecipeFindManyArgs>(args?: Prisma.SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RecipeCreateArgs>(args: Prisma.SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RecipeCreateManyArgs>(args?: Prisma.SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RecipeDeleteArgs>(args: Prisma.SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RecipeUpdateArgs>(args: Prisma.SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RecipeDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RecipeUpdateManyArgs>(args: Prisma.SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RecipeUpsertArgs>(args: Prisma.SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RecipeCountArgs>(args?: Prisma.Subset<T, RecipeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecipeCountAggregateOutputType> : number>;
    aggregate<T extends RecipeAggregateArgs>(args: Prisma.Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>;
    groupBy<T extends RecipeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecipeGroupByArgs['orderBy'];
    } : {
        orderBy?: RecipeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RecipeFieldRefs;
}
export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RecipeFieldRefs {
    readonly id: Prisma.FieldRef<"Recipe", 'Int'>;
    readonly title: Prisma.FieldRef<"Recipe", 'String'>;
    readonly description: Prisma.FieldRef<"Recipe", 'String'>;
    readonly ingredients: Prisma.FieldRef<"Recipe", 'String'>;
    readonly userId: Prisma.FieldRef<"Recipe", 'Int'>;
}
export type RecipeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where: Prisma.RecipeWhereUniqueInput;
};
export type RecipeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where: Prisma.RecipeWhereUniqueInput;
};
export type RecipeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    cursor?: Prisma.RecipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
export type RecipeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    cursor?: Prisma.RecipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
export type RecipeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    cursor?: Prisma.RecipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
export type RecipeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecipeCreateInput, Prisma.RecipeUncheckedCreateInput>;
};
export type RecipeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RecipeCreateManyInput | Prisma.RecipeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RecipeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    data: Prisma.RecipeCreateManyInput | Prisma.RecipeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RecipeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RecipeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecipeUpdateInput, Prisma.RecipeUncheckedUpdateInput>;
    where: Prisma.RecipeWhereUniqueInput;
};
export type RecipeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyInput>;
    where?: Prisma.RecipeWhereInput;
    limit?: number;
};
export type RecipeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyInput>;
    where?: Prisma.RecipeWhereInput;
    limit?: number;
    include?: Prisma.RecipeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RecipeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateInput, Prisma.RecipeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RecipeUpdateInput, Prisma.RecipeUncheckedUpdateInput>;
};
export type RecipeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where: Prisma.RecipeWhereUniqueInput;
};
export type RecipeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeWhereInput;
    limit?: number;
};
export type RecipeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    include?: Prisma.RecipeInclude<ExtArgs> | null;
};
export {};
