
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PoolInfo
 * 
 */
export type PoolInfo = $Result.DefaultSelection<Prisma.$PoolInfoPayload>
/**
 * Model PoolDetails
 * 
 */
export type PoolDetails = $Result.DefaultSelection<Prisma.$PoolDetailsPayload>
/**
 * Model TokenInfo
 * 
 */
export type TokenInfo = $Result.DefaultSelection<Prisma.$TokenInfoPayload>
/**
 * Model PoolMetrics
 * 
 */
export type PoolMetrics = $Result.DefaultSelection<Prisma.$PoolMetricsPayload>
/**
 * Model MetricDay
 * 
 */
export type MetricDay = $Result.DefaultSelection<Prisma.$MetricDayPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PoolInfos
 * const poolInfos = await prisma.poolInfo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PoolInfos
   * const poolInfos = await prisma.poolInfo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.poolInfo`: Exposes CRUD operations for the **PoolInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoolInfos
    * const poolInfos = await prisma.poolInfo.findMany()
    * ```
    */
  get poolInfo(): Prisma.PoolInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poolDetails`: Exposes CRUD operations for the **PoolDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoolDetails
    * const poolDetails = await prisma.poolDetails.findMany()
    * ```
    */
  get poolDetails(): Prisma.PoolDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenInfo`: Exposes CRUD operations for the **TokenInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenInfos
    * const tokenInfos = await prisma.tokenInfo.findMany()
    * ```
    */
  get tokenInfo(): Prisma.TokenInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poolMetrics`: Exposes CRUD operations for the **PoolMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoolMetrics
    * const poolMetrics = await prisma.poolMetrics.findMany()
    * ```
    */
  get poolMetrics(): Prisma.PoolMetricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metricDay`: Exposes CRUD operations for the **MetricDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetricDays
    * const metricDays = await prisma.metricDay.findMany()
    * ```
    */
  get metricDay(): Prisma.MetricDayDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PoolInfo: 'PoolInfo',
    PoolDetails: 'PoolDetails',
    TokenInfo: 'TokenInfo',
    PoolMetrics: 'PoolMetrics',
    MetricDay: 'MetricDay'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "poolInfo" | "poolDetails" | "tokenInfo" | "poolMetrics" | "metricDay"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PoolInfo: {
        payload: Prisma.$PoolInfoPayload<ExtArgs>
        fields: Prisma.PoolInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>
          }
          findFirst: {
            args: Prisma.PoolInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>
          }
          findMany: {
            args: Prisma.PoolInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>[]
          }
          create: {
            args: Prisma.PoolInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>
          }
          createMany: {
            args: Prisma.PoolInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>[]
          }
          delete: {
            args: Prisma.PoolInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>
          }
          update: {
            args: Prisma.PoolInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>
          }
          deleteMany: {
            args: Prisma.PoolInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>[]
          }
          upsert: {
            args: Prisma.PoolInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolInfoPayload>
          }
          aggregate: {
            args: Prisma.PoolInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoolInfo>
          }
          groupBy: {
            args: Prisma.PoolInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PoolInfoCountAggregateOutputType> | number
          }
        }
      }
      PoolDetails: {
        payload: Prisma.$PoolDetailsPayload<ExtArgs>
        fields: Prisma.PoolDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>
          }
          findFirst: {
            args: Prisma.PoolDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>
          }
          findMany: {
            args: Prisma.PoolDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>[]
          }
          create: {
            args: Prisma.PoolDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>
          }
          createMany: {
            args: Prisma.PoolDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>[]
          }
          delete: {
            args: Prisma.PoolDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>
          }
          update: {
            args: Prisma.PoolDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>
          }
          deleteMany: {
            args: Prisma.PoolDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>[]
          }
          upsert: {
            args: Prisma.PoolDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolDetailsPayload>
          }
          aggregate: {
            args: Prisma.PoolDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoolDetails>
          }
          groupBy: {
            args: Prisma.PoolDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<PoolDetailsCountAggregateOutputType> | number
          }
        }
      }
      TokenInfo: {
        payload: Prisma.$TokenInfoPayload<ExtArgs>
        fields: Prisma.TokenInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>
          }
          findFirst: {
            args: Prisma.TokenInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>
          }
          findMany: {
            args: Prisma.TokenInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>[]
          }
          create: {
            args: Prisma.TokenInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>
          }
          createMany: {
            args: Prisma.TokenInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>[]
          }
          delete: {
            args: Prisma.TokenInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>
          }
          update: {
            args: Prisma.TokenInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>
          }
          deleteMany: {
            args: Prisma.TokenInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>[]
          }
          upsert: {
            args: Prisma.TokenInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenInfoPayload>
          }
          aggregate: {
            args: Prisma.TokenInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenInfo>
          }
          groupBy: {
            args: Prisma.TokenInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenInfoCountArgs<ExtArgs>
            result: $Utils.Optional<TokenInfoCountAggregateOutputType> | number
          }
        }
      }
      PoolMetrics: {
        payload: Prisma.$PoolMetricsPayload<ExtArgs>
        fields: Prisma.PoolMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>
          }
          findFirst: {
            args: Prisma.PoolMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>
          }
          findMany: {
            args: Prisma.PoolMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>[]
          }
          create: {
            args: Prisma.PoolMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>
          }
          createMany: {
            args: Prisma.PoolMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>[]
          }
          delete: {
            args: Prisma.PoolMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>
          }
          update: {
            args: Prisma.PoolMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>
          }
          deleteMany: {
            args: Prisma.PoolMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>[]
          }
          upsert: {
            args: Prisma.PoolMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolMetricsPayload>
          }
          aggregate: {
            args: Prisma.PoolMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoolMetrics>
          }
          groupBy: {
            args: Prisma.PoolMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<PoolMetricsCountAggregateOutputType> | number
          }
        }
      }
      MetricDay: {
        payload: Prisma.$MetricDayPayload<ExtArgs>
        fields: Prisma.MetricDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>
          }
          findFirst: {
            args: Prisma.MetricDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>
          }
          findMany: {
            args: Prisma.MetricDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>[]
          }
          create: {
            args: Prisma.MetricDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>
          }
          createMany: {
            args: Prisma.MetricDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>[]
          }
          delete: {
            args: Prisma.MetricDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>
          }
          update: {
            args: Prisma.MetricDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>
          }
          deleteMany: {
            args: Prisma.MetricDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>[]
          }
          upsert: {
            args: Prisma.MetricDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDayPayload>
          }
          aggregate: {
            args: Prisma.MetricDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetricDay>
          }
          groupBy: {
            args: Prisma.MetricDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricDayCountArgs<ExtArgs>
            result: $Utils.Optional<MetricDayCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    poolInfo?: PoolInfoOmit
    poolDetails?: PoolDetailsOmit
    tokenInfo?: TokenInfoOmit
    poolMetrics?: PoolMetricsOmit
    metricDay?: MetricDayOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PoolInfoCountOutputType
   */

  export type PoolInfoCountOutputType = {
    metrics: number
  }

  export type PoolInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | PoolInfoCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * PoolInfoCountOutputType without action
   */
  export type PoolInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfoCountOutputType
     */
    select?: PoolInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoolInfoCountOutputType without action
   */
  export type PoolInfoCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolMetricsWhereInput
  }


  /**
   * Count Type PoolDetailsCountOutputType
   */

  export type PoolDetailsCountOutputType = {
    tokens_info: number
  }

  export type PoolDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens_info?: boolean | PoolDetailsCountOutputTypeCountTokens_infoArgs
  }

  // Custom InputTypes
  /**
   * PoolDetailsCountOutputType without action
   */
  export type PoolDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetailsCountOutputType
     */
    select?: PoolDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoolDetailsCountOutputType without action
   */
  export type PoolDetailsCountOutputTypeCountTokens_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenInfoWhereInput
  }


  /**
   * Count Type PoolMetricsCountOutputType
   */

  export type PoolMetricsCountOutputType = {
    days: number
  }

  export type PoolMetricsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | PoolMetricsCountOutputTypeCountDaysArgs
  }

  // Custom InputTypes
  /**
   * PoolMetricsCountOutputType without action
   */
  export type PoolMetricsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetricsCountOutputType
     */
    select?: PoolMetricsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoolMetricsCountOutputType without action
   */
  export type PoolMetricsCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricDayWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PoolInfo
   */

  export type AggregatePoolInfo = {
    _count: PoolInfoCountAggregateOutputType | null
    _avg: PoolInfoAvgAggregateOutputType | null
    _sum: PoolInfoSumAggregateOutputType | null
    _min: PoolInfoMinAggregateOutputType | null
    _max: PoolInfoMaxAggregateOutputType | null
  }

  export type PoolInfoAvgAggregateOutputType = {
    volume_24h: number | null
    total_volume_24h: number | null
    total_trade_24h: number | null
    created_time: number | null
  }

  export type PoolInfoSumAggregateOutputType = {
    volume_24h: number | null
    total_volume_24h: number | null
    total_trade_24h: number | null
    created_time: bigint | null
  }

  export type PoolInfoMinAggregateOutputType = {
    id: string | null
    volume_24h: number | null
    pool_address: string | null
    program_id: string | null
    token1: string | null
    token1_account: string | null
    token2: string | null
    token2_account: string | null
    total_volume_24h: number | null
    total_trade_24h: number | null
    created_time: bigint | null
  }

  export type PoolInfoMaxAggregateOutputType = {
    id: string | null
    volume_24h: number | null
    pool_address: string | null
    program_id: string | null
    token1: string | null
    token1_account: string | null
    token2: string | null
    token2_account: string | null
    total_volume_24h: number | null
    total_trade_24h: number | null
    created_time: bigint | null
  }

  export type PoolInfoCountAggregateOutputType = {
    id: number
    volume_24h: number
    pool_address: number
    program_id: number
    token1: number
    token1_account: number
    token2: number
    token2_account: number
    total_volume_24h: number
    total_trade_24h: number
    created_time: number
    _all: number
  }


  export type PoolInfoAvgAggregateInputType = {
    volume_24h?: true
    total_volume_24h?: true
    total_trade_24h?: true
    created_time?: true
  }

  export type PoolInfoSumAggregateInputType = {
    volume_24h?: true
    total_volume_24h?: true
    total_trade_24h?: true
    created_time?: true
  }

  export type PoolInfoMinAggregateInputType = {
    id?: true
    volume_24h?: true
    pool_address?: true
    program_id?: true
    token1?: true
    token1_account?: true
    token2?: true
    token2_account?: true
    total_volume_24h?: true
    total_trade_24h?: true
    created_time?: true
  }

  export type PoolInfoMaxAggregateInputType = {
    id?: true
    volume_24h?: true
    pool_address?: true
    program_id?: true
    token1?: true
    token1_account?: true
    token2?: true
    token2_account?: true
    total_volume_24h?: true
    total_trade_24h?: true
    created_time?: true
  }

  export type PoolInfoCountAggregateInputType = {
    id?: true
    volume_24h?: true
    pool_address?: true
    program_id?: true
    token1?: true
    token1_account?: true
    token2?: true
    token2_account?: true
    total_volume_24h?: true
    total_trade_24h?: true
    created_time?: true
    _all?: true
  }

  export type PoolInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolInfo to aggregate.
     */
    where?: PoolInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolInfos to fetch.
     */
    orderBy?: PoolInfoOrderByWithRelationInput | PoolInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoolInfos
    **/
    _count?: true | PoolInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolInfoMaxAggregateInputType
  }

  export type GetPoolInfoAggregateType<T extends PoolInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePoolInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoolInfo[P]>
      : GetScalarType<T[P], AggregatePoolInfo[P]>
  }




  export type PoolInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolInfoWhereInput
    orderBy?: PoolInfoOrderByWithAggregationInput | PoolInfoOrderByWithAggregationInput[]
    by: PoolInfoScalarFieldEnum[] | PoolInfoScalarFieldEnum
    having?: PoolInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolInfoCountAggregateInputType | true
    _avg?: PoolInfoAvgAggregateInputType
    _sum?: PoolInfoSumAggregateInputType
    _min?: PoolInfoMinAggregateInputType
    _max?: PoolInfoMaxAggregateInputType
  }

  export type PoolInfoGroupByOutputType = {
    id: string
    volume_24h: number
    pool_address: string
    program_id: string
    token1: string | null
    token1_account: string | null
    token2: string | null
    token2_account: string | null
    total_volume_24h: number | null
    total_trade_24h: number | null
    created_time: bigint | null
    _count: PoolInfoCountAggregateOutputType | null
    _avg: PoolInfoAvgAggregateOutputType | null
    _sum: PoolInfoSumAggregateOutputType | null
    _min: PoolInfoMinAggregateOutputType | null
    _max: PoolInfoMaxAggregateOutputType | null
  }

  type GetPoolInfoGroupByPayload<T extends PoolInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PoolInfoGroupByOutputType[P]>
        }
      >
    >


  export type PoolInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume_24h?: boolean
    pool_address?: boolean
    program_id?: boolean
    token1?: boolean
    token1_account?: boolean
    token2?: boolean
    token2_account?: boolean
    total_volume_24h?: boolean
    total_trade_24h?: boolean
    created_time?: boolean
    details?: boolean | PoolInfo$detailsArgs<ExtArgs>
    metrics?: boolean | PoolInfo$metricsArgs<ExtArgs>
    _count?: boolean | PoolInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolInfo"]>

  export type PoolInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume_24h?: boolean
    pool_address?: boolean
    program_id?: boolean
    token1?: boolean
    token1_account?: boolean
    token2?: boolean
    token2_account?: boolean
    total_volume_24h?: boolean
    total_trade_24h?: boolean
    created_time?: boolean
  }, ExtArgs["result"]["poolInfo"]>

  export type PoolInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volume_24h?: boolean
    pool_address?: boolean
    program_id?: boolean
    token1?: boolean
    token1_account?: boolean
    token2?: boolean
    token2_account?: boolean
    total_volume_24h?: boolean
    total_trade_24h?: boolean
    created_time?: boolean
  }, ExtArgs["result"]["poolInfo"]>

  export type PoolInfoSelectScalar = {
    id?: boolean
    volume_24h?: boolean
    pool_address?: boolean
    program_id?: boolean
    token1?: boolean
    token1_account?: boolean
    token2?: boolean
    token2_account?: boolean
    total_volume_24h?: boolean
    total_trade_24h?: boolean
    created_time?: boolean
  }

  export type PoolInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "volume_24h" | "pool_address" | "program_id" | "token1" | "token1_account" | "token2" | "token2_account" | "total_volume_24h" | "total_trade_24h" | "created_time", ExtArgs["result"]["poolInfo"]>
  export type PoolInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | PoolInfo$detailsArgs<ExtArgs>
    metrics?: boolean | PoolInfo$metricsArgs<ExtArgs>
    _count?: boolean | PoolInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoolInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PoolInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PoolInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoolInfo"
    objects: {
      details: Prisma.$PoolDetailsPayload<ExtArgs> | null
      metrics: Prisma.$PoolMetricsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      volume_24h: number
      pool_address: string
      program_id: string
      token1: string | null
      token1_account: string | null
      token2: string | null
      token2_account: string | null
      total_volume_24h: number | null
      total_trade_24h: number | null
      created_time: bigint | null
    }, ExtArgs["result"]["poolInfo"]>
    composites: {}
  }

  type PoolInfoGetPayload<S extends boolean | null | undefined | PoolInfoDefaultArgs> = $Result.GetResult<Prisma.$PoolInfoPayload, S>

  type PoolInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolInfoCountAggregateInputType | true
    }

  export interface PoolInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoolInfo'], meta: { name: 'PoolInfo' } }
    /**
     * Find zero or one PoolInfo that matches the filter.
     * @param {PoolInfoFindUniqueArgs} args - Arguments to find a PoolInfo
     * @example
     * // Get one PoolInfo
     * const poolInfo = await prisma.poolInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolInfoFindUniqueArgs>(args: SelectSubset<T, PoolInfoFindUniqueArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoolInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolInfoFindUniqueOrThrowArgs} args - Arguments to find a PoolInfo
     * @example
     * // Get one PoolInfo
     * const poolInfo = await prisma.poolInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolInfoFindFirstArgs} args - Arguments to find a PoolInfo
     * @example
     * // Get one PoolInfo
     * const poolInfo = await prisma.poolInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolInfoFindFirstArgs>(args?: SelectSubset<T, PoolInfoFindFirstArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolInfoFindFirstOrThrowArgs} args - Arguments to find a PoolInfo
     * @example
     * // Get one PoolInfo
     * const poolInfo = await prisma.poolInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoolInfos
     * const poolInfos = await prisma.poolInfo.findMany()
     * 
     * // Get first 10 PoolInfos
     * const poolInfos = await prisma.poolInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolInfoWithIdOnly = await prisma.poolInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolInfoFindManyArgs>(args?: SelectSubset<T, PoolInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoolInfo.
     * @param {PoolInfoCreateArgs} args - Arguments to create a PoolInfo.
     * @example
     * // Create one PoolInfo
     * const PoolInfo = await prisma.poolInfo.create({
     *   data: {
     *     // ... data to create a PoolInfo
     *   }
     * })
     * 
     */
    create<T extends PoolInfoCreateArgs>(args: SelectSubset<T, PoolInfoCreateArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoolInfos.
     * @param {PoolInfoCreateManyArgs} args - Arguments to create many PoolInfos.
     * @example
     * // Create many PoolInfos
     * const poolInfo = await prisma.poolInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolInfoCreateManyArgs>(args?: SelectSubset<T, PoolInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoolInfos and returns the data saved in the database.
     * @param {PoolInfoCreateManyAndReturnArgs} args - Arguments to create many PoolInfos.
     * @example
     * // Create many PoolInfos
     * const poolInfo = await prisma.poolInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoolInfos and only return the `id`
     * const poolInfoWithIdOnly = await prisma.poolInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoolInfo.
     * @param {PoolInfoDeleteArgs} args - Arguments to delete one PoolInfo.
     * @example
     * // Delete one PoolInfo
     * const PoolInfo = await prisma.poolInfo.delete({
     *   where: {
     *     // ... filter to delete one PoolInfo
     *   }
     * })
     * 
     */
    delete<T extends PoolInfoDeleteArgs>(args: SelectSubset<T, PoolInfoDeleteArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoolInfo.
     * @param {PoolInfoUpdateArgs} args - Arguments to update one PoolInfo.
     * @example
     * // Update one PoolInfo
     * const poolInfo = await prisma.poolInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolInfoUpdateArgs>(args: SelectSubset<T, PoolInfoUpdateArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoolInfos.
     * @param {PoolInfoDeleteManyArgs} args - Arguments to filter PoolInfos to delete.
     * @example
     * // Delete a few PoolInfos
     * const { count } = await prisma.poolInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolInfoDeleteManyArgs>(args?: SelectSubset<T, PoolInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoolInfos
     * const poolInfo = await prisma.poolInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolInfoUpdateManyArgs>(args: SelectSubset<T, PoolInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolInfos and returns the data updated in the database.
     * @param {PoolInfoUpdateManyAndReturnArgs} args - Arguments to update many PoolInfos.
     * @example
     * // Update many PoolInfos
     * const poolInfo = await prisma.poolInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoolInfos and only return the `id`
     * const poolInfoWithIdOnly = await prisma.poolInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoolInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoolInfo.
     * @param {PoolInfoUpsertArgs} args - Arguments to update or create a PoolInfo.
     * @example
     * // Update or create a PoolInfo
     * const poolInfo = await prisma.poolInfo.upsert({
     *   create: {
     *     // ... data to create a PoolInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoolInfo we want to update
     *   }
     * })
     */
    upsert<T extends PoolInfoUpsertArgs>(args: SelectSubset<T, PoolInfoUpsertArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoolInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolInfoCountArgs} args - Arguments to filter PoolInfos to count.
     * @example
     * // Count the number of PoolInfos
     * const count = await prisma.poolInfo.count({
     *   where: {
     *     // ... the filter for the PoolInfos we want to count
     *   }
     * })
    **/
    count<T extends PoolInfoCountArgs>(
      args?: Subset<T, PoolInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoolInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolInfoAggregateArgs>(args: Subset<T, PoolInfoAggregateArgs>): Prisma.PrismaPromise<GetPoolInfoAggregateType<T>>

    /**
     * Group by PoolInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolInfoGroupByArgs['orderBy'] }
        : { orderBy?: PoolInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoolInfo model
   */
  readonly fields: PoolInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoolInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends PoolInfo$detailsArgs<ExtArgs> = {}>(args?: Subset<T, PoolInfo$detailsArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    metrics<T extends PoolInfo$metricsArgs<ExtArgs> = {}>(args?: Subset<T, PoolInfo$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoolInfo model
   */
  interface PoolInfoFieldRefs {
    readonly id: FieldRef<"PoolInfo", 'String'>
    readonly volume_24h: FieldRef<"PoolInfo", 'Float'>
    readonly pool_address: FieldRef<"PoolInfo", 'String'>
    readonly program_id: FieldRef<"PoolInfo", 'String'>
    readonly token1: FieldRef<"PoolInfo", 'String'>
    readonly token1_account: FieldRef<"PoolInfo", 'String'>
    readonly token2: FieldRef<"PoolInfo", 'String'>
    readonly token2_account: FieldRef<"PoolInfo", 'String'>
    readonly total_volume_24h: FieldRef<"PoolInfo", 'Float'>
    readonly total_trade_24h: FieldRef<"PoolInfo", 'Float'>
    readonly created_time: FieldRef<"PoolInfo", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * PoolInfo findUnique
   */
  export type PoolInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * Filter, which PoolInfo to fetch.
     */
    where: PoolInfoWhereUniqueInput
  }

  /**
   * PoolInfo findUniqueOrThrow
   */
  export type PoolInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * Filter, which PoolInfo to fetch.
     */
    where: PoolInfoWhereUniqueInput
  }

  /**
   * PoolInfo findFirst
   */
  export type PoolInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * Filter, which PoolInfo to fetch.
     */
    where?: PoolInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolInfos to fetch.
     */
    orderBy?: PoolInfoOrderByWithRelationInput | PoolInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolInfos.
     */
    cursor?: PoolInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolInfos.
     */
    distinct?: PoolInfoScalarFieldEnum | PoolInfoScalarFieldEnum[]
  }

  /**
   * PoolInfo findFirstOrThrow
   */
  export type PoolInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * Filter, which PoolInfo to fetch.
     */
    where?: PoolInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolInfos to fetch.
     */
    orderBy?: PoolInfoOrderByWithRelationInput | PoolInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolInfos.
     */
    cursor?: PoolInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolInfos.
     */
    distinct?: PoolInfoScalarFieldEnum | PoolInfoScalarFieldEnum[]
  }

  /**
   * PoolInfo findMany
   */
  export type PoolInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * Filter, which PoolInfos to fetch.
     */
    where?: PoolInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolInfos to fetch.
     */
    orderBy?: PoolInfoOrderByWithRelationInput | PoolInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoolInfos.
     */
    cursor?: PoolInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolInfos.
     */
    skip?: number
    distinct?: PoolInfoScalarFieldEnum | PoolInfoScalarFieldEnum[]
  }

  /**
   * PoolInfo create
   */
  export type PoolInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a PoolInfo.
     */
    data: XOR<PoolInfoCreateInput, PoolInfoUncheckedCreateInput>
  }

  /**
   * PoolInfo createMany
   */
  export type PoolInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoolInfos.
     */
    data: PoolInfoCreateManyInput | PoolInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolInfo createManyAndReturn
   */
  export type PoolInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * The data used to create many PoolInfos.
     */
    data: PoolInfoCreateManyInput | PoolInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolInfo update
   */
  export type PoolInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a PoolInfo.
     */
    data: XOR<PoolInfoUpdateInput, PoolInfoUncheckedUpdateInput>
    /**
     * Choose, which PoolInfo to update.
     */
    where: PoolInfoWhereUniqueInput
  }

  /**
   * PoolInfo updateMany
   */
  export type PoolInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoolInfos.
     */
    data: XOR<PoolInfoUpdateManyMutationInput, PoolInfoUncheckedUpdateManyInput>
    /**
     * Filter which PoolInfos to update
     */
    where?: PoolInfoWhereInput
    /**
     * Limit how many PoolInfos to update.
     */
    limit?: number
  }

  /**
   * PoolInfo updateManyAndReturn
   */
  export type PoolInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * The data used to update PoolInfos.
     */
    data: XOR<PoolInfoUpdateManyMutationInput, PoolInfoUncheckedUpdateManyInput>
    /**
     * Filter which PoolInfos to update
     */
    where?: PoolInfoWhereInput
    /**
     * Limit how many PoolInfos to update.
     */
    limit?: number
  }

  /**
   * PoolInfo upsert
   */
  export type PoolInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the PoolInfo to update in case it exists.
     */
    where: PoolInfoWhereUniqueInput
    /**
     * In case the PoolInfo found by the `where` argument doesn't exist, create a new PoolInfo with this data.
     */
    create: XOR<PoolInfoCreateInput, PoolInfoUncheckedCreateInput>
    /**
     * In case the PoolInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolInfoUpdateInput, PoolInfoUncheckedUpdateInput>
  }

  /**
   * PoolInfo delete
   */
  export type PoolInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    /**
     * Filter which PoolInfo to delete.
     */
    where: PoolInfoWhereUniqueInput
  }

  /**
   * PoolInfo deleteMany
   */
  export type PoolInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolInfos to delete
     */
    where?: PoolInfoWhereInput
    /**
     * Limit how many PoolInfos to delete.
     */
    limit?: number
  }

  /**
   * PoolInfo.details
   */
  export type PoolInfo$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    where?: PoolDetailsWhereInput
  }

  /**
   * PoolInfo.metrics
   */
  export type PoolInfo$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    where?: PoolMetricsWhereInput
    orderBy?: PoolMetricsOrderByWithRelationInput | PoolMetricsOrderByWithRelationInput[]
    cursor?: PoolMetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolMetricsScalarFieldEnum | PoolMetricsScalarFieldEnum[]
  }

  /**
   * PoolInfo without action
   */
  export type PoolInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
  }


  /**
   * Model PoolDetails
   */

  export type AggregatePoolDetails = {
    _count: PoolDetailsCountAggregateOutputType | null
    _avg: PoolDetailsAvgAggregateOutputType | null
    _sum: PoolDetailsSumAggregateOutputType | null
    _min: PoolDetailsMinAggregateOutputType | null
    _max: PoolDetailsMaxAggregateOutputType | null
  }

  export type PoolDetailsAvgAggregateOutputType = {
    create_block_time: number | null
  }

  export type PoolDetailsSumAggregateOutputType = {
    create_block_time: bigint | null
  }

  export type PoolDetailsMinAggregateOutputType = {
    id: string | null
    pool_address: string | null
    program_id: string | null
    create_tx_hash: string | null
    create_block_time: bigint | null
    creator: string | null
    lp_token: string | null
  }

  export type PoolDetailsMaxAggregateOutputType = {
    id: string | null
    pool_address: string | null
    program_id: string | null
    create_tx_hash: string | null
    create_block_time: bigint | null
    creator: string | null
    lp_token: string | null
  }

  export type PoolDetailsCountAggregateOutputType = {
    id: number
    pool_address: number
    program_id: number
    create_tx_hash: number
    create_block_time: number
    creator: number
    lp_token: number
    _all: number
  }


  export type PoolDetailsAvgAggregateInputType = {
    create_block_time?: true
  }

  export type PoolDetailsSumAggregateInputType = {
    create_block_time?: true
  }

  export type PoolDetailsMinAggregateInputType = {
    id?: true
    pool_address?: true
    program_id?: true
    create_tx_hash?: true
    create_block_time?: true
    creator?: true
    lp_token?: true
  }

  export type PoolDetailsMaxAggregateInputType = {
    id?: true
    pool_address?: true
    program_id?: true
    create_tx_hash?: true
    create_block_time?: true
    creator?: true
    lp_token?: true
  }

  export type PoolDetailsCountAggregateInputType = {
    id?: true
    pool_address?: true
    program_id?: true
    create_tx_hash?: true
    create_block_time?: true
    creator?: true
    lp_token?: true
    _all?: true
  }

  export type PoolDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolDetails to aggregate.
     */
    where?: PoolDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolDetails to fetch.
     */
    orderBy?: PoolDetailsOrderByWithRelationInput | PoolDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoolDetails
    **/
    _count?: true | PoolDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolDetailsMaxAggregateInputType
  }

  export type GetPoolDetailsAggregateType<T extends PoolDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePoolDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoolDetails[P]>
      : GetScalarType<T[P], AggregatePoolDetails[P]>
  }




  export type PoolDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolDetailsWhereInput
    orderBy?: PoolDetailsOrderByWithAggregationInput | PoolDetailsOrderByWithAggregationInput[]
    by: PoolDetailsScalarFieldEnum[] | PoolDetailsScalarFieldEnum
    having?: PoolDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolDetailsCountAggregateInputType | true
    _avg?: PoolDetailsAvgAggregateInputType
    _sum?: PoolDetailsSumAggregateInputType
    _min?: PoolDetailsMinAggregateInputType
    _max?: PoolDetailsMaxAggregateInputType
  }

  export type PoolDetailsGroupByOutputType = {
    id: string
    pool_address: string
    program_id: string
    create_tx_hash: string
    create_block_time: bigint
    creator: string
    lp_token: string
    _count: PoolDetailsCountAggregateOutputType | null
    _avg: PoolDetailsAvgAggregateOutputType | null
    _sum: PoolDetailsSumAggregateOutputType | null
    _min: PoolDetailsMinAggregateOutputType | null
    _max: PoolDetailsMaxAggregateOutputType | null
  }

  type GetPoolDetailsGroupByPayload<T extends PoolDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PoolDetailsGroupByOutputType[P]>
        }
      >
    >


  export type PoolDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pool_address?: boolean
    program_id?: boolean
    create_tx_hash?: boolean
    create_block_time?: boolean
    creator?: boolean
    lp_token?: boolean
    tokens_info?: boolean | PoolDetails$tokens_infoArgs<ExtArgs>
    pool?: boolean | PoolInfoDefaultArgs<ExtArgs>
    _count?: boolean | PoolDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolDetails"]>

  export type PoolDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pool_address?: boolean
    program_id?: boolean
    create_tx_hash?: boolean
    create_block_time?: boolean
    creator?: boolean
    lp_token?: boolean
    pool?: boolean | PoolInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolDetails"]>

  export type PoolDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pool_address?: boolean
    program_id?: boolean
    create_tx_hash?: boolean
    create_block_time?: boolean
    creator?: boolean
    lp_token?: boolean
    pool?: boolean | PoolInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolDetails"]>

  export type PoolDetailsSelectScalar = {
    id?: boolean
    pool_address?: boolean
    program_id?: boolean
    create_tx_hash?: boolean
    create_block_time?: boolean
    creator?: boolean
    lp_token?: boolean
  }

  export type PoolDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pool_address" | "program_id" | "create_tx_hash" | "create_block_time" | "creator" | "lp_token", ExtArgs["result"]["poolDetails"]>
  export type PoolDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens_info?: boolean | PoolDetails$tokens_infoArgs<ExtArgs>
    pool?: boolean | PoolInfoDefaultArgs<ExtArgs>
    _count?: boolean | PoolDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoolDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolInfoDefaultArgs<ExtArgs>
  }
  export type PoolDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolInfoDefaultArgs<ExtArgs>
  }

  export type $PoolDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoolDetails"
    objects: {
      tokens_info: Prisma.$TokenInfoPayload<ExtArgs>[]
      pool: Prisma.$PoolInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pool_address: string
      program_id: string
      create_tx_hash: string
      create_block_time: bigint
      creator: string
      lp_token: string
    }, ExtArgs["result"]["poolDetails"]>
    composites: {}
  }

  type PoolDetailsGetPayload<S extends boolean | null | undefined | PoolDetailsDefaultArgs> = $Result.GetResult<Prisma.$PoolDetailsPayload, S>

  type PoolDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolDetailsCountAggregateInputType | true
    }

  export interface PoolDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoolDetails'], meta: { name: 'PoolDetails' } }
    /**
     * Find zero or one PoolDetails that matches the filter.
     * @param {PoolDetailsFindUniqueArgs} args - Arguments to find a PoolDetails
     * @example
     * // Get one PoolDetails
     * const poolDetails = await prisma.poolDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolDetailsFindUniqueArgs>(args: SelectSubset<T, PoolDetailsFindUniqueArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoolDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolDetailsFindUniqueOrThrowArgs} args - Arguments to find a PoolDetails
     * @example
     * // Get one PoolDetails
     * const poolDetails = await prisma.poolDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolDetailsFindFirstArgs} args - Arguments to find a PoolDetails
     * @example
     * // Get one PoolDetails
     * const poolDetails = await prisma.poolDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolDetailsFindFirstArgs>(args?: SelectSubset<T, PoolDetailsFindFirstArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolDetailsFindFirstOrThrowArgs} args - Arguments to find a PoolDetails
     * @example
     * // Get one PoolDetails
     * const poolDetails = await prisma.poolDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoolDetails
     * const poolDetails = await prisma.poolDetails.findMany()
     * 
     * // Get first 10 PoolDetails
     * const poolDetails = await prisma.poolDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolDetailsWithIdOnly = await prisma.poolDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolDetailsFindManyArgs>(args?: SelectSubset<T, PoolDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoolDetails.
     * @param {PoolDetailsCreateArgs} args - Arguments to create a PoolDetails.
     * @example
     * // Create one PoolDetails
     * const PoolDetails = await prisma.poolDetails.create({
     *   data: {
     *     // ... data to create a PoolDetails
     *   }
     * })
     * 
     */
    create<T extends PoolDetailsCreateArgs>(args: SelectSubset<T, PoolDetailsCreateArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoolDetails.
     * @param {PoolDetailsCreateManyArgs} args - Arguments to create many PoolDetails.
     * @example
     * // Create many PoolDetails
     * const poolDetails = await prisma.poolDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolDetailsCreateManyArgs>(args?: SelectSubset<T, PoolDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoolDetails and returns the data saved in the database.
     * @param {PoolDetailsCreateManyAndReturnArgs} args - Arguments to create many PoolDetails.
     * @example
     * // Create many PoolDetails
     * const poolDetails = await prisma.poolDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoolDetails and only return the `id`
     * const poolDetailsWithIdOnly = await prisma.poolDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoolDetails.
     * @param {PoolDetailsDeleteArgs} args - Arguments to delete one PoolDetails.
     * @example
     * // Delete one PoolDetails
     * const PoolDetails = await prisma.poolDetails.delete({
     *   where: {
     *     // ... filter to delete one PoolDetails
     *   }
     * })
     * 
     */
    delete<T extends PoolDetailsDeleteArgs>(args: SelectSubset<T, PoolDetailsDeleteArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoolDetails.
     * @param {PoolDetailsUpdateArgs} args - Arguments to update one PoolDetails.
     * @example
     * // Update one PoolDetails
     * const poolDetails = await prisma.poolDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolDetailsUpdateArgs>(args: SelectSubset<T, PoolDetailsUpdateArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoolDetails.
     * @param {PoolDetailsDeleteManyArgs} args - Arguments to filter PoolDetails to delete.
     * @example
     * // Delete a few PoolDetails
     * const { count } = await prisma.poolDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolDetailsDeleteManyArgs>(args?: SelectSubset<T, PoolDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoolDetails
     * const poolDetails = await prisma.poolDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolDetailsUpdateManyArgs>(args: SelectSubset<T, PoolDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolDetails and returns the data updated in the database.
     * @param {PoolDetailsUpdateManyAndReturnArgs} args - Arguments to update many PoolDetails.
     * @example
     * // Update many PoolDetails
     * const poolDetails = await prisma.poolDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoolDetails and only return the `id`
     * const poolDetailsWithIdOnly = await prisma.poolDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoolDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoolDetails.
     * @param {PoolDetailsUpsertArgs} args - Arguments to update or create a PoolDetails.
     * @example
     * // Update or create a PoolDetails
     * const poolDetails = await prisma.poolDetails.upsert({
     *   create: {
     *     // ... data to create a PoolDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoolDetails we want to update
     *   }
     * })
     */
    upsert<T extends PoolDetailsUpsertArgs>(args: SelectSubset<T, PoolDetailsUpsertArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoolDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolDetailsCountArgs} args - Arguments to filter PoolDetails to count.
     * @example
     * // Count the number of PoolDetails
     * const count = await prisma.poolDetails.count({
     *   where: {
     *     // ... the filter for the PoolDetails we want to count
     *   }
     * })
    **/
    count<T extends PoolDetailsCountArgs>(
      args?: Subset<T, PoolDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoolDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolDetailsAggregateArgs>(args: Subset<T, PoolDetailsAggregateArgs>): Prisma.PrismaPromise<GetPoolDetailsAggregateType<T>>

    /**
     * Group by PoolDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolDetailsGroupByArgs['orderBy'] }
        : { orderBy?: PoolDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoolDetails model
   */
  readonly fields: PoolDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoolDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens_info<T extends PoolDetails$tokens_infoArgs<ExtArgs> = {}>(args?: Subset<T, PoolDetails$tokens_infoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pool<T extends PoolInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolInfoDefaultArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoolDetails model
   */
  interface PoolDetailsFieldRefs {
    readonly id: FieldRef<"PoolDetails", 'String'>
    readonly pool_address: FieldRef<"PoolDetails", 'String'>
    readonly program_id: FieldRef<"PoolDetails", 'String'>
    readonly create_tx_hash: FieldRef<"PoolDetails", 'String'>
    readonly create_block_time: FieldRef<"PoolDetails", 'BigInt'>
    readonly creator: FieldRef<"PoolDetails", 'String'>
    readonly lp_token: FieldRef<"PoolDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PoolDetails findUnique
   */
  export type PoolDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PoolDetails to fetch.
     */
    where: PoolDetailsWhereUniqueInput
  }

  /**
   * PoolDetails findUniqueOrThrow
   */
  export type PoolDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PoolDetails to fetch.
     */
    where: PoolDetailsWhereUniqueInput
  }

  /**
   * PoolDetails findFirst
   */
  export type PoolDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PoolDetails to fetch.
     */
    where?: PoolDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolDetails to fetch.
     */
    orderBy?: PoolDetailsOrderByWithRelationInput | PoolDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolDetails.
     */
    cursor?: PoolDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolDetails.
     */
    distinct?: PoolDetailsScalarFieldEnum | PoolDetailsScalarFieldEnum[]
  }

  /**
   * PoolDetails findFirstOrThrow
   */
  export type PoolDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PoolDetails to fetch.
     */
    where?: PoolDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolDetails to fetch.
     */
    orderBy?: PoolDetailsOrderByWithRelationInput | PoolDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolDetails.
     */
    cursor?: PoolDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolDetails.
     */
    distinct?: PoolDetailsScalarFieldEnum | PoolDetailsScalarFieldEnum[]
  }

  /**
   * PoolDetails findMany
   */
  export type PoolDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PoolDetails to fetch.
     */
    where?: PoolDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolDetails to fetch.
     */
    orderBy?: PoolDetailsOrderByWithRelationInput | PoolDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoolDetails.
     */
    cursor?: PoolDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolDetails.
     */
    skip?: number
    distinct?: PoolDetailsScalarFieldEnum | PoolDetailsScalarFieldEnum[]
  }

  /**
   * PoolDetails create
   */
  export type PoolDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a PoolDetails.
     */
    data: XOR<PoolDetailsCreateInput, PoolDetailsUncheckedCreateInput>
  }

  /**
   * PoolDetails createMany
   */
  export type PoolDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoolDetails.
     */
    data: PoolDetailsCreateManyInput | PoolDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolDetails createManyAndReturn
   */
  export type PoolDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many PoolDetails.
     */
    data: PoolDetailsCreateManyInput | PoolDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoolDetails update
   */
  export type PoolDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a PoolDetails.
     */
    data: XOR<PoolDetailsUpdateInput, PoolDetailsUncheckedUpdateInput>
    /**
     * Choose, which PoolDetails to update.
     */
    where: PoolDetailsWhereUniqueInput
  }

  /**
   * PoolDetails updateMany
   */
  export type PoolDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoolDetails.
     */
    data: XOR<PoolDetailsUpdateManyMutationInput, PoolDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PoolDetails to update
     */
    where?: PoolDetailsWhereInput
    /**
     * Limit how many PoolDetails to update.
     */
    limit?: number
  }

  /**
   * PoolDetails updateManyAndReturn
   */
  export type PoolDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * The data used to update PoolDetails.
     */
    data: XOR<PoolDetailsUpdateManyMutationInput, PoolDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PoolDetails to update
     */
    where?: PoolDetailsWhereInput
    /**
     * Limit how many PoolDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoolDetails upsert
   */
  export type PoolDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the PoolDetails to update in case it exists.
     */
    where: PoolDetailsWhereUniqueInput
    /**
     * In case the PoolDetails found by the `where` argument doesn't exist, create a new PoolDetails with this data.
     */
    create: XOR<PoolDetailsCreateInput, PoolDetailsUncheckedCreateInput>
    /**
     * In case the PoolDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolDetailsUpdateInput, PoolDetailsUncheckedUpdateInput>
  }

  /**
   * PoolDetails delete
   */
  export type PoolDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
    /**
     * Filter which PoolDetails to delete.
     */
    where: PoolDetailsWhereUniqueInput
  }

  /**
   * PoolDetails deleteMany
   */
  export type PoolDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolDetails to delete
     */
    where?: PoolDetailsWhereInput
    /**
     * Limit how many PoolDetails to delete.
     */
    limit?: number
  }

  /**
   * PoolDetails.tokens_info
   */
  export type PoolDetails$tokens_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    where?: TokenInfoWhereInput
    orderBy?: TokenInfoOrderByWithRelationInput | TokenInfoOrderByWithRelationInput[]
    cursor?: TokenInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenInfoScalarFieldEnum | TokenInfoScalarFieldEnum[]
  }

  /**
   * PoolDetails without action
   */
  export type PoolDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolDetails
     */
    select?: PoolDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolDetails
     */
    omit?: PoolDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolDetailsInclude<ExtArgs> | null
  }


  /**
   * Model TokenInfo
   */

  export type AggregateTokenInfo = {
    _count: TokenInfoCountAggregateOutputType | null
    _avg: TokenInfoAvgAggregateOutputType | null
    _sum: TokenInfoSumAggregateOutputType | null
    _min: TokenInfoMinAggregateOutputType | null
    _max: TokenInfoMaxAggregateOutputType | null
  }

  export type TokenInfoAvgAggregateOutputType = {
    amount: number | null
  }

  export type TokenInfoSumAggregateOutputType = {
    amount: number | null
  }

  export type TokenInfoMinAggregateOutputType = {
    id: string | null
    token: string | null
    token_account: string | null
    amount: number | null
    poolDetailsId: string | null
  }

  export type TokenInfoMaxAggregateOutputType = {
    id: string | null
    token: string | null
    token_account: string | null
    amount: number | null
    poolDetailsId: string | null
  }

  export type TokenInfoCountAggregateOutputType = {
    id: number
    token: number
    token_account: number
    amount: number
    poolDetailsId: number
    _all: number
  }


  export type TokenInfoAvgAggregateInputType = {
    amount?: true
  }

  export type TokenInfoSumAggregateInputType = {
    amount?: true
  }

  export type TokenInfoMinAggregateInputType = {
    id?: true
    token?: true
    token_account?: true
    amount?: true
    poolDetailsId?: true
  }

  export type TokenInfoMaxAggregateInputType = {
    id?: true
    token?: true
    token_account?: true
    amount?: true
    poolDetailsId?: true
  }

  export type TokenInfoCountAggregateInputType = {
    id?: true
    token?: true
    token_account?: true
    amount?: true
    poolDetailsId?: true
    _all?: true
  }

  export type TokenInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenInfo to aggregate.
     */
    where?: TokenInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenInfos to fetch.
     */
    orderBy?: TokenInfoOrderByWithRelationInput | TokenInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenInfos
    **/
    _count?: true | TokenInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenInfoMaxAggregateInputType
  }

  export type GetTokenInfoAggregateType<T extends TokenInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenInfo[P]>
      : GetScalarType<T[P], AggregateTokenInfo[P]>
  }




  export type TokenInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenInfoWhereInput
    orderBy?: TokenInfoOrderByWithAggregationInput | TokenInfoOrderByWithAggregationInput[]
    by: TokenInfoScalarFieldEnum[] | TokenInfoScalarFieldEnum
    having?: TokenInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenInfoCountAggregateInputType | true
    _avg?: TokenInfoAvgAggregateInputType
    _sum?: TokenInfoSumAggregateInputType
    _min?: TokenInfoMinAggregateInputType
    _max?: TokenInfoMaxAggregateInputType
  }

  export type TokenInfoGroupByOutputType = {
    id: string
    token: string
    token_account: string
    amount: number
    poolDetailsId: string
    _count: TokenInfoCountAggregateOutputType | null
    _avg: TokenInfoAvgAggregateOutputType | null
    _sum: TokenInfoSumAggregateOutputType | null
    _min: TokenInfoMinAggregateOutputType | null
    _max: TokenInfoMaxAggregateOutputType | null
  }

  type GetTokenInfoGroupByPayload<T extends TokenInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenInfoGroupByOutputType[P]>
            : GetScalarType<T[P], TokenInfoGroupByOutputType[P]>
        }
      >
    >


  export type TokenInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    token_account?: boolean
    amount?: boolean
    poolDetailsId?: boolean
    poolDetails?: boolean | PoolDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenInfo"]>

  export type TokenInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    token_account?: boolean
    amount?: boolean
    poolDetailsId?: boolean
    poolDetails?: boolean | PoolDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenInfo"]>

  export type TokenInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    token_account?: boolean
    amount?: boolean
    poolDetailsId?: boolean
    poolDetails?: boolean | PoolDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenInfo"]>

  export type TokenInfoSelectScalar = {
    id?: boolean
    token?: boolean
    token_account?: boolean
    amount?: boolean
    poolDetailsId?: boolean
  }

  export type TokenInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "token_account" | "amount" | "poolDetailsId", ExtArgs["result"]["tokenInfo"]>
  export type TokenInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolDetails?: boolean | PoolDetailsDefaultArgs<ExtArgs>
  }
  export type TokenInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolDetails?: boolean | PoolDetailsDefaultArgs<ExtArgs>
  }
  export type TokenInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolDetails?: boolean | PoolDetailsDefaultArgs<ExtArgs>
  }

  export type $TokenInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenInfo"
    objects: {
      poolDetails: Prisma.$PoolDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      token_account: string
      amount: number
      poolDetailsId: string
    }, ExtArgs["result"]["tokenInfo"]>
    composites: {}
  }

  type TokenInfoGetPayload<S extends boolean | null | undefined | TokenInfoDefaultArgs> = $Result.GetResult<Prisma.$TokenInfoPayload, S>

  type TokenInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenInfoCountAggregateInputType | true
    }

  export interface TokenInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenInfo'], meta: { name: 'TokenInfo' } }
    /**
     * Find zero or one TokenInfo that matches the filter.
     * @param {TokenInfoFindUniqueArgs} args - Arguments to find a TokenInfo
     * @example
     * // Get one TokenInfo
     * const tokenInfo = await prisma.tokenInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenInfoFindUniqueArgs>(args: SelectSubset<T, TokenInfoFindUniqueArgs<ExtArgs>>): Prisma__TokenInfoClient<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenInfoFindUniqueOrThrowArgs} args - Arguments to find a TokenInfo
     * @example
     * // Get one TokenInfo
     * const tokenInfo = await prisma.tokenInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenInfoClient<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInfoFindFirstArgs} args - Arguments to find a TokenInfo
     * @example
     * // Get one TokenInfo
     * const tokenInfo = await prisma.tokenInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenInfoFindFirstArgs>(args?: SelectSubset<T, TokenInfoFindFirstArgs<ExtArgs>>): Prisma__TokenInfoClient<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInfoFindFirstOrThrowArgs} args - Arguments to find a TokenInfo
     * @example
     * // Get one TokenInfo
     * const tokenInfo = await prisma.tokenInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenInfoClient<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenInfos
     * const tokenInfos = await prisma.tokenInfo.findMany()
     * 
     * // Get first 10 TokenInfos
     * const tokenInfos = await prisma.tokenInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenInfoWithIdOnly = await prisma.tokenInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenInfoFindManyArgs>(args?: SelectSubset<T, TokenInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenInfo.
     * @param {TokenInfoCreateArgs} args - Arguments to create a TokenInfo.
     * @example
     * // Create one TokenInfo
     * const TokenInfo = await prisma.tokenInfo.create({
     *   data: {
     *     // ... data to create a TokenInfo
     *   }
     * })
     * 
     */
    create<T extends TokenInfoCreateArgs>(args: SelectSubset<T, TokenInfoCreateArgs<ExtArgs>>): Prisma__TokenInfoClient<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenInfos.
     * @param {TokenInfoCreateManyArgs} args - Arguments to create many TokenInfos.
     * @example
     * // Create many TokenInfos
     * const tokenInfo = await prisma.tokenInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenInfoCreateManyArgs>(args?: SelectSubset<T, TokenInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenInfos and returns the data saved in the database.
     * @param {TokenInfoCreateManyAndReturnArgs} args - Arguments to create many TokenInfos.
     * @example
     * // Create many TokenInfos
     * const tokenInfo = await prisma.tokenInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenInfos and only return the `id`
     * const tokenInfoWithIdOnly = await prisma.tokenInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenInfo.
     * @param {TokenInfoDeleteArgs} args - Arguments to delete one TokenInfo.
     * @example
     * // Delete one TokenInfo
     * const TokenInfo = await prisma.tokenInfo.delete({
     *   where: {
     *     // ... filter to delete one TokenInfo
     *   }
     * })
     * 
     */
    delete<T extends TokenInfoDeleteArgs>(args: SelectSubset<T, TokenInfoDeleteArgs<ExtArgs>>): Prisma__TokenInfoClient<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenInfo.
     * @param {TokenInfoUpdateArgs} args - Arguments to update one TokenInfo.
     * @example
     * // Update one TokenInfo
     * const tokenInfo = await prisma.tokenInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenInfoUpdateArgs>(args: SelectSubset<T, TokenInfoUpdateArgs<ExtArgs>>): Prisma__TokenInfoClient<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenInfos.
     * @param {TokenInfoDeleteManyArgs} args - Arguments to filter TokenInfos to delete.
     * @example
     * // Delete a few TokenInfos
     * const { count } = await prisma.tokenInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenInfoDeleteManyArgs>(args?: SelectSubset<T, TokenInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenInfos
     * const tokenInfo = await prisma.tokenInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenInfoUpdateManyArgs>(args: SelectSubset<T, TokenInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenInfos and returns the data updated in the database.
     * @param {TokenInfoUpdateManyAndReturnArgs} args - Arguments to update many TokenInfos.
     * @example
     * // Update many TokenInfos
     * const tokenInfo = await prisma.tokenInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenInfos and only return the `id`
     * const tokenInfoWithIdOnly = await prisma.tokenInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenInfo.
     * @param {TokenInfoUpsertArgs} args - Arguments to update or create a TokenInfo.
     * @example
     * // Update or create a TokenInfo
     * const tokenInfo = await prisma.tokenInfo.upsert({
     *   create: {
     *     // ... data to create a TokenInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenInfo we want to update
     *   }
     * })
     */
    upsert<T extends TokenInfoUpsertArgs>(args: SelectSubset<T, TokenInfoUpsertArgs<ExtArgs>>): Prisma__TokenInfoClient<$Result.GetResult<Prisma.$TokenInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInfoCountArgs} args - Arguments to filter TokenInfos to count.
     * @example
     * // Count the number of TokenInfos
     * const count = await prisma.tokenInfo.count({
     *   where: {
     *     // ... the filter for the TokenInfos we want to count
     *   }
     * })
    **/
    count<T extends TokenInfoCountArgs>(
      args?: Subset<T, TokenInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenInfoAggregateArgs>(args: Subset<T, TokenInfoAggregateArgs>): Prisma.PrismaPromise<GetTokenInfoAggregateType<T>>

    /**
     * Group by TokenInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenInfoGroupByArgs['orderBy'] }
        : { orderBy?: TokenInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenInfo model
   */
  readonly fields: TokenInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poolDetails<T extends PoolDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolDetailsDefaultArgs<ExtArgs>>): Prisma__PoolDetailsClient<$Result.GetResult<Prisma.$PoolDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenInfo model
   */
  interface TokenInfoFieldRefs {
    readonly id: FieldRef<"TokenInfo", 'String'>
    readonly token: FieldRef<"TokenInfo", 'String'>
    readonly token_account: FieldRef<"TokenInfo", 'String'>
    readonly amount: FieldRef<"TokenInfo", 'Float'>
    readonly poolDetailsId: FieldRef<"TokenInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TokenInfo findUnique
   */
  export type TokenInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * Filter, which TokenInfo to fetch.
     */
    where: TokenInfoWhereUniqueInput
  }

  /**
   * TokenInfo findUniqueOrThrow
   */
  export type TokenInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * Filter, which TokenInfo to fetch.
     */
    where: TokenInfoWhereUniqueInput
  }

  /**
   * TokenInfo findFirst
   */
  export type TokenInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * Filter, which TokenInfo to fetch.
     */
    where?: TokenInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenInfos to fetch.
     */
    orderBy?: TokenInfoOrderByWithRelationInput | TokenInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenInfos.
     */
    cursor?: TokenInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenInfos.
     */
    distinct?: TokenInfoScalarFieldEnum | TokenInfoScalarFieldEnum[]
  }

  /**
   * TokenInfo findFirstOrThrow
   */
  export type TokenInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * Filter, which TokenInfo to fetch.
     */
    where?: TokenInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenInfos to fetch.
     */
    orderBy?: TokenInfoOrderByWithRelationInput | TokenInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenInfos.
     */
    cursor?: TokenInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenInfos.
     */
    distinct?: TokenInfoScalarFieldEnum | TokenInfoScalarFieldEnum[]
  }

  /**
   * TokenInfo findMany
   */
  export type TokenInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * Filter, which TokenInfos to fetch.
     */
    where?: TokenInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenInfos to fetch.
     */
    orderBy?: TokenInfoOrderByWithRelationInput | TokenInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenInfos.
     */
    cursor?: TokenInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenInfos.
     */
    skip?: number
    distinct?: TokenInfoScalarFieldEnum | TokenInfoScalarFieldEnum[]
  }

  /**
   * TokenInfo create
   */
  export type TokenInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenInfo.
     */
    data: XOR<TokenInfoCreateInput, TokenInfoUncheckedCreateInput>
  }

  /**
   * TokenInfo createMany
   */
  export type TokenInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenInfos.
     */
    data: TokenInfoCreateManyInput | TokenInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenInfo createManyAndReturn
   */
  export type TokenInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * The data used to create many TokenInfos.
     */
    data: TokenInfoCreateManyInput | TokenInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenInfo update
   */
  export type TokenInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenInfo.
     */
    data: XOR<TokenInfoUpdateInput, TokenInfoUncheckedUpdateInput>
    /**
     * Choose, which TokenInfo to update.
     */
    where: TokenInfoWhereUniqueInput
  }

  /**
   * TokenInfo updateMany
   */
  export type TokenInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenInfos.
     */
    data: XOR<TokenInfoUpdateManyMutationInput, TokenInfoUncheckedUpdateManyInput>
    /**
     * Filter which TokenInfos to update
     */
    where?: TokenInfoWhereInput
    /**
     * Limit how many TokenInfos to update.
     */
    limit?: number
  }

  /**
   * TokenInfo updateManyAndReturn
   */
  export type TokenInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * The data used to update TokenInfos.
     */
    data: XOR<TokenInfoUpdateManyMutationInput, TokenInfoUncheckedUpdateManyInput>
    /**
     * Filter which TokenInfos to update
     */
    where?: TokenInfoWhereInput
    /**
     * Limit how many TokenInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenInfo upsert
   */
  export type TokenInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenInfo to update in case it exists.
     */
    where: TokenInfoWhereUniqueInput
    /**
     * In case the TokenInfo found by the `where` argument doesn't exist, create a new TokenInfo with this data.
     */
    create: XOR<TokenInfoCreateInput, TokenInfoUncheckedCreateInput>
    /**
     * In case the TokenInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenInfoUpdateInput, TokenInfoUncheckedUpdateInput>
  }

  /**
   * TokenInfo delete
   */
  export type TokenInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
    /**
     * Filter which TokenInfo to delete.
     */
    where: TokenInfoWhereUniqueInput
  }

  /**
   * TokenInfo deleteMany
   */
  export type TokenInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenInfos to delete
     */
    where?: TokenInfoWhereInput
    /**
     * Limit how many TokenInfos to delete.
     */
    limit?: number
  }

  /**
   * TokenInfo without action
   */
  export type TokenInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenInfo
     */
    select?: TokenInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenInfo
     */
    omit?: TokenInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInfoInclude<ExtArgs> | null
  }


  /**
   * Model PoolMetrics
   */

  export type AggregatePoolMetrics = {
    _count: PoolMetricsCountAggregateOutputType | null
    _avg: PoolMetricsAvgAggregateOutputType | null
    _sum: PoolMetricsSumAggregateOutputType | null
    _min: PoolMetricsMinAggregateOutputType | null
    _max: PoolMetricsMaxAggregateOutputType | null
  }

  export type PoolMetricsAvgAggregateOutputType = {
    total_volume_24h: number | null
    total_volume_change_24h: number | null
    total_trades_24h: number | null
    total_trades_change_24h: number | null
  }

  export type PoolMetricsSumAggregateOutputType = {
    total_volume_24h: number | null
    total_volume_change_24h: number | null
    total_trades_24h: number | null
    total_trades_change_24h: number | null
  }

  export type PoolMetricsMinAggregateOutputType = {
    id: string | null
    pool_address: string | null
    program_id: string | null
    total_volume_24h: number | null
    total_volume_change_24h: number | null
    total_trades_24h: number | null
    total_trades_change_24h: number | null
    poolInfoId: string | null
  }

  export type PoolMetricsMaxAggregateOutputType = {
    id: string | null
    pool_address: string | null
    program_id: string | null
    total_volume_24h: number | null
    total_volume_change_24h: number | null
    total_trades_24h: number | null
    total_trades_change_24h: number | null
    poolInfoId: string | null
  }

  export type PoolMetricsCountAggregateOutputType = {
    id: number
    pool_address: number
    program_id: number
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    poolInfoId: number
    _all: number
  }


  export type PoolMetricsAvgAggregateInputType = {
    total_volume_24h?: true
    total_volume_change_24h?: true
    total_trades_24h?: true
    total_trades_change_24h?: true
  }

  export type PoolMetricsSumAggregateInputType = {
    total_volume_24h?: true
    total_volume_change_24h?: true
    total_trades_24h?: true
    total_trades_change_24h?: true
  }

  export type PoolMetricsMinAggregateInputType = {
    id?: true
    pool_address?: true
    program_id?: true
    total_volume_24h?: true
    total_volume_change_24h?: true
    total_trades_24h?: true
    total_trades_change_24h?: true
    poolInfoId?: true
  }

  export type PoolMetricsMaxAggregateInputType = {
    id?: true
    pool_address?: true
    program_id?: true
    total_volume_24h?: true
    total_volume_change_24h?: true
    total_trades_24h?: true
    total_trades_change_24h?: true
    poolInfoId?: true
  }

  export type PoolMetricsCountAggregateInputType = {
    id?: true
    pool_address?: true
    program_id?: true
    total_volume_24h?: true
    total_volume_change_24h?: true
    total_trades_24h?: true
    total_trades_change_24h?: true
    poolInfoId?: true
    _all?: true
  }

  export type PoolMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolMetrics to aggregate.
     */
    where?: PoolMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolMetrics to fetch.
     */
    orderBy?: PoolMetricsOrderByWithRelationInput | PoolMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoolMetrics
    **/
    _count?: true | PoolMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolMetricsMaxAggregateInputType
  }

  export type GetPoolMetricsAggregateType<T extends PoolMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregatePoolMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoolMetrics[P]>
      : GetScalarType<T[P], AggregatePoolMetrics[P]>
  }




  export type PoolMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolMetricsWhereInput
    orderBy?: PoolMetricsOrderByWithAggregationInput | PoolMetricsOrderByWithAggregationInput[]
    by: PoolMetricsScalarFieldEnum[] | PoolMetricsScalarFieldEnum
    having?: PoolMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolMetricsCountAggregateInputType | true
    _avg?: PoolMetricsAvgAggregateInputType
    _sum?: PoolMetricsSumAggregateInputType
    _min?: PoolMetricsMinAggregateInputType
    _max?: PoolMetricsMaxAggregateInputType
  }

  export type PoolMetricsGroupByOutputType = {
    id: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    poolInfoId: string | null
    _count: PoolMetricsCountAggregateOutputType | null
    _avg: PoolMetricsAvgAggregateOutputType | null
    _sum: PoolMetricsSumAggregateOutputType | null
    _min: PoolMetricsMinAggregateOutputType | null
    _max: PoolMetricsMaxAggregateOutputType | null
  }

  type GetPoolMetricsGroupByPayload<T extends PoolMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], PoolMetricsGroupByOutputType[P]>
        }
      >
    >


  export type PoolMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pool_address?: boolean
    program_id?: boolean
    total_volume_24h?: boolean
    total_volume_change_24h?: boolean
    total_trades_24h?: boolean
    total_trades_change_24h?: boolean
    poolInfoId?: boolean
    poolInfo?: boolean | PoolMetrics$poolInfoArgs<ExtArgs>
    days?: boolean | PoolMetrics$daysArgs<ExtArgs>
    _count?: boolean | PoolMetricsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolMetrics"]>

  export type PoolMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pool_address?: boolean
    program_id?: boolean
    total_volume_24h?: boolean
    total_volume_change_24h?: boolean
    total_trades_24h?: boolean
    total_trades_change_24h?: boolean
    poolInfoId?: boolean
    poolInfo?: boolean | PoolMetrics$poolInfoArgs<ExtArgs>
  }, ExtArgs["result"]["poolMetrics"]>

  export type PoolMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pool_address?: boolean
    program_id?: boolean
    total_volume_24h?: boolean
    total_volume_change_24h?: boolean
    total_trades_24h?: boolean
    total_trades_change_24h?: boolean
    poolInfoId?: boolean
    poolInfo?: boolean | PoolMetrics$poolInfoArgs<ExtArgs>
  }, ExtArgs["result"]["poolMetrics"]>

  export type PoolMetricsSelectScalar = {
    id?: boolean
    pool_address?: boolean
    program_id?: boolean
    total_volume_24h?: boolean
    total_volume_change_24h?: boolean
    total_trades_24h?: boolean
    total_trades_change_24h?: boolean
    poolInfoId?: boolean
  }

  export type PoolMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pool_address" | "program_id" | "total_volume_24h" | "total_volume_change_24h" | "total_trades_24h" | "total_trades_change_24h" | "poolInfoId", ExtArgs["result"]["poolMetrics"]>
  export type PoolMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolInfo?: boolean | PoolMetrics$poolInfoArgs<ExtArgs>
    days?: boolean | PoolMetrics$daysArgs<ExtArgs>
    _count?: boolean | PoolMetricsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoolMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolInfo?: boolean | PoolMetrics$poolInfoArgs<ExtArgs>
  }
  export type PoolMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolInfo?: boolean | PoolMetrics$poolInfoArgs<ExtArgs>
  }

  export type $PoolMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoolMetrics"
    objects: {
      poolInfo: Prisma.$PoolInfoPayload<ExtArgs> | null
      days: Prisma.$MetricDayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pool_address: string
      program_id: string
      total_volume_24h: number
      total_volume_change_24h: number
      total_trades_24h: number
      total_trades_change_24h: number
      poolInfoId: string | null
    }, ExtArgs["result"]["poolMetrics"]>
    composites: {}
  }

  type PoolMetricsGetPayload<S extends boolean | null | undefined | PoolMetricsDefaultArgs> = $Result.GetResult<Prisma.$PoolMetricsPayload, S>

  type PoolMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolMetricsCountAggregateInputType | true
    }

  export interface PoolMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoolMetrics'], meta: { name: 'PoolMetrics' } }
    /**
     * Find zero or one PoolMetrics that matches the filter.
     * @param {PoolMetricsFindUniqueArgs} args - Arguments to find a PoolMetrics
     * @example
     * // Get one PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolMetricsFindUniqueArgs>(args: SelectSubset<T, PoolMetricsFindUniqueArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoolMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolMetricsFindUniqueOrThrowArgs} args - Arguments to find a PoolMetrics
     * @example
     * // Get one PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolMetricsFindFirstArgs} args - Arguments to find a PoolMetrics
     * @example
     * // Get one PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolMetricsFindFirstArgs>(args?: SelectSubset<T, PoolMetricsFindFirstArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolMetricsFindFirstOrThrowArgs} args - Arguments to find a PoolMetrics
     * @example
     * // Get one PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.findMany()
     * 
     * // Get first 10 PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolMetricsWithIdOnly = await prisma.poolMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolMetricsFindManyArgs>(args?: SelectSubset<T, PoolMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoolMetrics.
     * @param {PoolMetricsCreateArgs} args - Arguments to create a PoolMetrics.
     * @example
     * // Create one PoolMetrics
     * const PoolMetrics = await prisma.poolMetrics.create({
     *   data: {
     *     // ... data to create a PoolMetrics
     *   }
     * })
     * 
     */
    create<T extends PoolMetricsCreateArgs>(args: SelectSubset<T, PoolMetricsCreateArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoolMetrics.
     * @param {PoolMetricsCreateManyArgs} args - Arguments to create many PoolMetrics.
     * @example
     * // Create many PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolMetricsCreateManyArgs>(args?: SelectSubset<T, PoolMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoolMetrics and returns the data saved in the database.
     * @param {PoolMetricsCreateManyAndReturnArgs} args - Arguments to create many PoolMetrics.
     * @example
     * // Create many PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoolMetrics and only return the `id`
     * const poolMetricsWithIdOnly = await prisma.poolMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoolMetrics.
     * @param {PoolMetricsDeleteArgs} args - Arguments to delete one PoolMetrics.
     * @example
     * // Delete one PoolMetrics
     * const PoolMetrics = await prisma.poolMetrics.delete({
     *   where: {
     *     // ... filter to delete one PoolMetrics
     *   }
     * })
     * 
     */
    delete<T extends PoolMetricsDeleteArgs>(args: SelectSubset<T, PoolMetricsDeleteArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoolMetrics.
     * @param {PoolMetricsUpdateArgs} args - Arguments to update one PoolMetrics.
     * @example
     * // Update one PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolMetricsUpdateArgs>(args: SelectSubset<T, PoolMetricsUpdateArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoolMetrics.
     * @param {PoolMetricsDeleteManyArgs} args - Arguments to filter PoolMetrics to delete.
     * @example
     * // Delete a few PoolMetrics
     * const { count } = await prisma.poolMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolMetricsDeleteManyArgs>(args?: SelectSubset<T, PoolMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolMetricsUpdateManyArgs>(args: SelectSubset<T, PoolMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolMetrics and returns the data updated in the database.
     * @param {PoolMetricsUpdateManyAndReturnArgs} args - Arguments to update many PoolMetrics.
     * @example
     * // Update many PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoolMetrics and only return the `id`
     * const poolMetricsWithIdOnly = await prisma.poolMetrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoolMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoolMetrics.
     * @param {PoolMetricsUpsertArgs} args - Arguments to update or create a PoolMetrics.
     * @example
     * // Update or create a PoolMetrics
     * const poolMetrics = await prisma.poolMetrics.upsert({
     *   create: {
     *     // ... data to create a PoolMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoolMetrics we want to update
     *   }
     * })
     */
    upsert<T extends PoolMetricsUpsertArgs>(args: SelectSubset<T, PoolMetricsUpsertArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoolMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolMetricsCountArgs} args - Arguments to filter PoolMetrics to count.
     * @example
     * // Count the number of PoolMetrics
     * const count = await prisma.poolMetrics.count({
     *   where: {
     *     // ... the filter for the PoolMetrics we want to count
     *   }
     * })
    **/
    count<T extends PoolMetricsCountArgs>(
      args?: Subset<T, PoolMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoolMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolMetricsAggregateArgs>(args: Subset<T, PoolMetricsAggregateArgs>): Prisma.PrismaPromise<GetPoolMetricsAggregateType<T>>

    /**
     * Group by PoolMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolMetricsGroupByArgs['orderBy'] }
        : { orderBy?: PoolMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoolMetrics model
   */
  readonly fields: PoolMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoolMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poolInfo<T extends PoolMetrics$poolInfoArgs<ExtArgs> = {}>(args?: Subset<T, PoolMetrics$poolInfoArgs<ExtArgs>>): Prisma__PoolInfoClient<$Result.GetResult<Prisma.$PoolInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    days<T extends PoolMetrics$daysArgs<ExtArgs> = {}>(args?: Subset<T, PoolMetrics$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoolMetrics model
   */
  interface PoolMetricsFieldRefs {
    readonly id: FieldRef<"PoolMetrics", 'String'>
    readonly pool_address: FieldRef<"PoolMetrics", 'String'>
    readonly program_id: FieldRef<"PoolMetrics", 'String'>
    readonly total_volume_24h: FieldRef<"PoolMetrics", 'Float'>
    readonly total_volume_change_24h: FieldRef<"PoolMetrics", 'Float'>
    readonly total_trades_24h: FieldRef<"PoolMetrics", 'Float'>
    readonly total_trades_change_24h: FieldRef<"PoolMetrics", 'Float'>
    readonly poolInfoId: FieldRef<"PoolMetrics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PoolMetrics findUnique
   */
  export type PoolMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PoolMetrics to fetch.
     */
    where: PoolMetricsWhereUniqueInput
  }

  /**
   * PoolMetrics findUniqueOrThrow
   */
  export type PoolMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PoolMetrics to fetch.
     */
    where: PoolMetricsWhereUniqueInput
  }

  /**
   * PoolMetrics findFirst
   */
  export type PoolMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PoolMetrics to fetch.
     */
    where?: PoolMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolMetrics to fetch.
     */
    orderBy?: PoolMetricsOrderByWithRelationInput | PoolMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolMetrics.
     */
    cursor?: PoolMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolMetrics.
     */
    distinct?: PoolMetricsScalarFieldEnum | PoolMetricsScalarFieldEnum[]
  }

  /**
   * PoolMetrics findFirstOrThrow
   */
  export type PoolMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PoolMetrics to fetch.
     */
    where?: PoolMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolMetrics to fetch.
     */
    orderBy?: PoolMetricsOrderByWithRelationInput | PoolMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolMetrics.
     */
    cursor?: PoolMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolMetrics.
     */
    distinct?: PoolMetricsScalarFieldEnum | PoolMetricsScalarFieldEnum[]
  }

  /**
   * PoolMetrics findMany
   */
  export type PoolMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PoolMetrics to fetch.
     */
    where?: PoolMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolMetrics to fetch.
     */
    orderBy?: PoolMetricsOrderByWithRelationInput | PoolMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoolMetrics.
     */
    cursor?: PoolMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolMetrics.
     */
    skip?: number
    distinct?: PoolMetricsScalarFieldEnum | PoolMetricsScalarFieldEnum[]
  }

  /**
   * PoolMetrics create
   */
  export type PoolMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a PoolMetrics.
     */
    data: XOR<PoolMetricsCreateInput, PoolMetricsUncheckedCreateInput>
  }

  /**
   * PoolMetrics createMany
   */
  export type PoolMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoolMetrics.
     */
    data: PoolMetricsCreateManyInput | PoolMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolMetrics createManyAndReturn
   */
  export type PoolMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many PoolMetrics.
     */
    data: PoolMetricsCreateManyInput | PoolMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoolMetrics update
   */
  export type PoolMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a PoolMetrics.
     */
    data: XOR<PoolMetricsUpdateInput, PoolMetricsUncheckedUpdateInput>
    /**
     * Choose, which PoolMetrics to update.
     */
    where: PoolMetricsWhereUniqueInput
  }

  /**
   * PoolMetrics updateMany
   */
  export type PoolMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoolMetrics.
     */
    data: XOR<PoolMetricsUpdateManyMutationInput, PoolMetricsUncheckedUpdateManyInput>
    /**
     * Filter which PoolMetrics to update
     */
    where?: PoolMetricsWhereInput
    /**
     * Limit how many PoolMetrics to update.
     */
    limit?: number
  }

  /**
   * PoolMetrics updateManyAndReturn
   */
  export type PoolMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * The data used to update PoolMetrics.
     */
    data: XOR<PoolMetricsUpdateManyMutationInput, PoolMetricsUncheckedUpdateManyInput>
    /**
     * Filter which PoolMetrics to update
     */
    where?: PoolMetricsWhereInput
    /**
     * Limit how many PoolMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoolMetrics upsert
   */
  export type PoolMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the PoolMetrics to update in case it exists.
     */
    where: PoolMetricsWhereUniqueInput
    /**
     * In case the PoolMetrics found by the `where` argument doesn't exist, create a new PoolMetrics with this data.
     */
    create: XOR<PoolMetricsCreateInput, PoolMetricsUncheckedCreateInput>
    /**
     * In case the PoolMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolMetricsUpdateInput, PoolMetricsUncheckedUpdateInput>
  }

  /**
   * PoolMetrics delete
   */
  export type PoolMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
    /**
     * Filter which PoolMetrics to delete.
     */
    where: PoolMetricsWhereUniqueInput
  }

  /**
   * PoolMetrics deleteMany
   */
  export type PoolMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolMetrics to delete
     */
    where?: PoolMetricsWhereInput
    /**
     * Limit how many PoolMetrics to delete.
     */
    limit?: number
  }

  /**
   * PoolMetrics.poolInfo
   */
  export type PoolMetrics$poolInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolInfo
     */
    select?: PoolInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolInfo
     */
    omit?: PoolInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInfoInclude<ExtArgs> | null
    where?: PoolInfoWhereInput
  }

  /**
   * PoolMetrics.days
   */
  export type PoolMetrics$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    where?: MetricDayWhereInput
    orderBy?: MetricDayOrderByWithRelationInput | MetricDayOrderByWithRelationInput[]
    cursor?: MetricDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricDayScalarFieldEnum | MetricDayScalarFieldEnum[]
  }

  /**
   * PoolMetrics without action
   */
  export type PoolMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolMetrics
     */
    select?: PoolMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolMetrics
     */
    omit?: PoolMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolMetricsInclude<ExtArgs> | null
  }


  /**
   * Model MetricDay
   */

  export type AggregateMetricDay = {
    _count: MetricDayCountAggregateOutputType | null
    _avg: MetricDayAvgAggregateOutputType | null
    _sum: MetricDaySumAggregateOutputType | null
    _min: MetricDayMinAggregateOutputType | null
    _max: MetricDayMaxAggregateOutputType | null
  }

  export type MetricDayAvgAggregateOutputType = {
    day: number | null
    value: number | null
  }

  export type MetricDaySumAggregateOutputType = {
    day: number | null
    value: number | null
  }

  export type MetricDayMinAggregateOutputType = {
    id: string | null
    day: number | null
    value: number | null
    poolMetricsId: string | null
  }

  export type MetricDayMaxAggregateOutputType = {
    id: string | null
    day: number | null
    value: number | null
    poolMetricsId: string | null
  }

  export type MetricDayCountAggregateOutputType = {
    id: number
    day: number
    value: number
    poolMetricsId: number
    _all: number
  }


  export type MetricDayAvgAggregateInputType = {
    day?: true
    value?: true
  }

  export type MetricDaySumAggregateInputType = {
    day?: true
    value?: true
  }

  export type MetricDayMinAggregateInputType = {
    id?: true
    day?: true
    value?: true
    poolMetricsId?: true
  }

  export type MetricDayMaxAggregateInputType = {
    id?: true
    day?: true
    value?: true
    poolMetricsId?: true
  }

  export type MetricDayCountAggregateInputType = {
    id?: true
    day?: true
    value?: true
    poolMetricsId?: true
    _all?: true
  }

  export type MetricDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricDay to aggregate.
     */
    where?: MetricDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricDays to fetch.
     */
    orderBy?: MetricDayOrderByWithRelationInput | MetricDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetricDays
    **/
    _count?: true | MetricDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricDayMaxAggregateInputType
  }

  export type GetMetricDayAggregateType<T extends MetricDayAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricDay[P]>
      : GetScalarType<T[P], AggregateMetricDay[P]>
  }




  export type MetricDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricDayWhereInput
    orderBy?: MetricDayOrderByWithAggregationInput | MetricDayOrderByWithAggregationInput[]
    by: MetricDayScalarFieldEnum[] | MetricDayScalarFieldEnum
    having?: MetricDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricDayCountAggregateInputType | true
    _avg?: MetricDayAvgAggregateInputType
    _sum?: MetricDaySumAggregateInputType
    _min?: MetricDayMinAggregateInputType
    _max?: MetricDayMaxAggregateInputType
  }

  export type MetricDayGroupByOutputType = {
    id: string
    day: number
    value: number
    poolMetricsId: string
    _count: MetricDayCountAggregateOutputType | null
    _avg: MetricDayAvgAggregateOutputType | null
    _sum: MetricDaySumAggregateOutputType | null
    _min: MetricDayMinAggregateOutputType | null
    _max: MetricDayMaxAggregateOutputType | null
  }

  type GetMetricDayGroupByPayload<T extends MetricDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricDayGroupByOutputType[P]>
            : GetScalarType<T[P], MetricDayGroupByOutputType[P]>
        }
      >
    >


  export type MetricDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    value?: boolean
    poolMetricsId?: boolean
    poolMetrics?: boolean | PoolMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricDay"]>

  export type MetricDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    value?: boolean
    poolMetricsId?: boolean
    poolMetrics?: boolean | PoolMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricDay"]>

  export type MetricDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    value?: boolean
    poolMetricsId?: boolean
    poolMetrics?: boolean | PoolMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricDay"]>

  export type MetricDaySelectScalar = {
    id?: boolean
    day?: boolean
    value?: boolean
    poolMetricsId?: boolean
  }

  export type MetricDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "value" | "poolMetricsId", ExtArgs["result"]["metricDay"]>
  export type MetricDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolMetrics?: boolean | PoolMetricsDefaultArgs<ExtArgs>
  }
  export type MetricDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolMetrics?: boolean | PoolMetricsDefaultArgs<ExtArgs>
  }
  export type MetricDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poolMetrics?: boolean | PoolMetricsDefaultArgs<ExtArgs>
  }

  export type $MetricDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetricDay"
    objects: {
      poolMetrics: Prisma.$PoolMetricsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      day: number
      value: number
      poolMetricsId: string
    }, ExtArgs["result"]["metricDay"]>
    composites: {}
  }

  type MetricDayGetPayload<S extends boolean | null | undefined | MetricDayDefaultArgs> = $Result.GetResult<Prisma.$MetricDayPayload, S>

  type MetricDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricDayCountAggregateInputType | true
    }

  export interface MetricDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetricDay'], meta: { name: 'MetricDay' } }
    /**
     * Find zero or one MetricDay that matches the filter.
     * @param {MetricDayFindUniqueArgs} args - Arguments to find a MetricDay
     * @example
     * // Get one MetricDay
     * const metricDay = await prisma.metricDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricDayFindUniqueArgs>(args: SelectSubset<T, MetricDayFindUniqueArgs<ExtArgs>>): Prisma__MetricDayClient<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetricDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricDayFindUniqueOrThrowArgs} args - Arguments to find a MetricDay
     * @example
     * // Get one MetricDay
     * const metricDay = await prisma.metricDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricDayFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricDayClient<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDayFindFirstArgs} args - Arguments to find a MetricDay
     * @example
     * // Get one MetricDay
     * const metricDay = await prisma.metricDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricDayFindFirstArgs>(args?: SelectSubset<T, MetricDayFindFirstArgs<ExtArgs>>): Prisma__MetricDayClient<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDayFindFirstOrThrowArgs} args - Arguments to find a MetricDay
     * @example
     * // Get one MetricDay
     * const metricDay = await prisma.metricDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricDayFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricDayClient<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetricDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetricDays
     * const metricDays = await prisma.metricDay.findMany()
     * 
     * // Get first 10 MetricDays
     * const metricDays = await prisma.metricDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricDayWithIdOnly = await prisma.metricDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricDayFindManyArgs>(args?: SelectSubset<T, MetricDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetricDay.
     * @param {MetricDayCreateArgs} args - Arguments to create a MetricDay.
     * @example
     * // Create one MetricDay
     * const MetricDay = await prisma.metricDay.create({
     *   data: {
     *     // ... data to create a MetricDay
     *   }
     * })
     * 
     */
    create<T extends MetricDayCreateArgs>(args: SelectSubset<T, MetricDayCreateArgs<ExtArgs>>): Prisma__MetricDayClient<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetricDays.
     * @param {MetricDayCreateManyArgs} args - Arguments to create many MetricDays.
     * @example
     * // Create many MetricDays
     * const metricDay = await prisma.metricDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricDayCreateManyArgs>(args?: SelectSubset<T, MetricDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetricDays and returns the data saved in the database.
     * @param {MetricDayCreateManyAndReturnArgs} args - Arguments to create many MetricDays.
     * @example
     * // Create many MetricDays
     * const metricDay = await prisma.metricDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetricDays and only return the `id`
     * const metricDayWithIdOnly = await prisma.metricDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricDayCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetricDay.
     * @param {MetricDayDeleteArgs} args - Arguments to delete one MetricDay.
     * @example
     * // Delete one MetricDay
     * const MetricDay = await prisma.metricDay.delete({
     *   where: {
     *     // ... filter to delete one MetricDay
     *   }
     * })
     * 
     */
    delete<T extends MetricDayDeleteArgs>(args: SelectSubset<T, MetricDayDeleteArgs<ExtArgs>>): Prisma__MetricDayClient<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetricDay.
     * @param {MetricDayUpdateArgs} args - Arguments to update one MetricDay.
     * @example
     * // Update one MetricDay
     * const metricDay = await prisma.metricDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricDayUpdateArgs>(args: SelectSubset<T, MetricDayUpdateArgs<ExtArgs>>): Prisma__MetricDayClient<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetricDays.
     * @param {MetricDayDeleteManyArgs} args - Arguments to filter MetricDays to delete.
     * @example
     * // Delete a few MetricDays
     * const { count } = await prisma.metricDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDayDeleteManyArgs>(args?: SelectSubset<T, MetricDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetricDays
     * const metricDay = await prisma.metricDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricDayUpdateManyArgs>(args: SelectSubset<T, MetricDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricDays and returns the data updated in the database.
     * @param {MetricDayUpdateManyAndReturnArgs} args - Arguments to update many MetricDays.
     * @example
     * // Update many MetricDays
     * const metricDay = await prisma.metricDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetricDays and only return the `id`
     * const metricDayWithIdOnly = await prisma.metricDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricDayUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetricDay.
     * @param {MetricDayUpsertArgs} args - Arguments to update or create a MetricDay.
     * @example
     * // Update or create a MetricDay
     * const metricDay = await prisma.metricDay.upsert({
     *   create: {
     *     // ... data to create a MetricDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetricDay we want to update
     *   }
     * })
     */
    upsert<T extends MetricDayUpsertArgs>(args: SelectSubset<T, MetricDayUpsertArgs<ExtArgs>>): Prisma__MetricDayClient<$Result.GetResult<Prisma.$MetricDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetricDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDayCountArgs} args - Arguments to filter MetricDays to count.
     * @example
     * // Count the number of MetricDays
     * const count = await prisma.metricDay.count({
     *   where: {
     *     // ... the filter for the MetricDays we want to count
     *   }
     * })
    **/
    count<T extends MetricDayCountArgs>(
      args?: Subset<T, MetricDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetricDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricDayAggregateArgs>(args: Subset<T, MetricDayAggregateArgs>): Prisma.PrismaPromise<GetMetricDayAggregateType<T>>

    /**
     * Group by MetricDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricDayGroupByArgs['orderBy'] }
        : { orderBy?: MetricDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetricDay model
   */
  readonly fields: MetricDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetricDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poolMetrics<T extends PoolMetricsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolMetricsDefaultArgs<ExtArgs>>): Prisma__PoolMetricsClient<$Result.GetResult<Prisma.$PoolMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetricDay model
   */
  interface MetricDayFieldRefs {
    readonly id: FieldRef<"MetricDay", 'String'>
    readonly day: FieldRef<"MetricDay", 'Int'>
    readonly value: FieldRef<"MetricDay", 'Float'>
    readonly poolMetricsId: FieldRef<"MetricDay", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MetricDay findUnique
   */
  export type MetricDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * Filter, which MetricDay to fetch.
     */
    where: MetricDayWhereUniqueInput
  }

  /**
   * MetricDay findUniqueOrThrow
   */
  export type MetricDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * Filter, which MetricDay to fetch.
     */
    where: MetricDayWhereUniqueInput
  }

  /**
   * MetricDay findFirst
   */
  export type MetricDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * Filter, which MetricDay to fetch.
     */
    where?: MetricDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricDays to fetch.
     */
    orderBy?: MetricDayOrderByWithRelationInput | MetricDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricDays.
     */
    cursor?: MetricDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricDays.
     */
    distinct?: MetricDayScalarFieldEnum | MetricDayScalarFieldEnum[]
  }

  /**
   * MetricDay findFirstOrThrow
   */
  export type MetricDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * Filter, which MetricDay to fetch.
     */
    where?: MetricDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricDays to fetch.
     */
    orderBy?: MetricDayOrderByWithRelationInput | MetricDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricDays.
     */
    cursor?: MetricDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricDays.
     */
    distinct?: MetricDayScalarFieldEnum | MetricDayScalarFieldEnum[]
  }

  /**
   * MetricDay findMany
   */
  export type MetricDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * Filter, which MetricDays to fetch.
     */
    where?: MetricDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricDays to fetch.
     */
    orderBy?: MetricDayOrderByWithRelationInput | MetricDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetricDays.
     */
    cursor?: MetricDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricDays.
     */
    skip?: number
    distinct?: MetricDayScalarFieldEnum | MetricDayScalarFieldEnum[]
  }

  /**
   * MetricDay create
   */
  export type MetricDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * The data needed to create a MetricDay.
     */
    data: XOR<MetricDayCreateInput, MetricDayUncheckedCreateInput>
  }

  /**
   * MetricDay createMany
   */
  export type MetricDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetricDays.
     */
    data: MetricDayCreateManyInput | MetricDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetricDay createManyAndReturn
   */
  export type MetricDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * The data used to create many MetricDays.
     */
    data: MetricDayCreateManyInput | MetricDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetricDay update
   */
  export type MetricDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * The data needed to update a MetricDay.
     */
    data: XOR<MetricDayUpdateInput, MetricDayUncheckedUpdateInput>
    /**
     * Choose, which MetricDay to update.
     */
    where: MetricDayWhereUniqueInput
  }

  /**
   * MetricDay updateMany
   */
  export type MetricDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetricDays.
     */
    data: XOR<MetricDayUpdateManyMutationInput, MetricDayUncheckedUpdateManyInput>
    /**
     * Filter which MetricDays to update
     */
    where?: MetricDayWhereInput
    /**
     * Limit how many MetricDays to update.
     */
    limit?: number
  }

  /**
   * MetricDay updateManyAndReturn
   */
  export type MetricDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * The data used to update MetricDays.
     */
    data: XOR<MetricDayUpdateManyMutationInput, MetricDayUncheckedUpdateManyInput>
    /**
     * Filter which MetricDays to update
     */
    where?: MetricDayWhereInput
    /**
     * Limit how many MetricDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetricDay upsert
   */
  export type MetricDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * The filter to search for the MetricDay to update in case it exists.
     */
    where: MetricDayWhereUniqueInput
    /**
     * In case the MetricDay found by the `where` argument doesn't exist, create a new MetricDay with this data.
     */
    create: XOR<MetricDayCreateInput, MetricDayUncheckedCreateInput>
    /**
     * In case the MetricDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricDayUpdateInput, MetricDayUncheckedUpdateInput>
  }

  /**
   * MetricDay delete
   */
  export type MetricDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
    /**
     * Filter which MetricDay to delete.
     */
    where: MetricDayWhereUniqueInput
  }

  /**
   * MetricDay deleteMany
   */
  export type MetricDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricDays to delete
     */
    where?: MetricDayWhereInput
    /**
     * Limit how many MetricDays to delete.
     */
    limit?: number
  }

  /**
   * MetricDay without action
   */
  export type MetricDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricDay
     */
    select?: MetricDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricDay
     */
    omit?: MetricDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDayInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PoolInfoScalarFieldEnum: {
    id: 'id',
    volume_24h: 'volume_24h',
    pool_address: 'pool_address',
    program_id: 'program_id',
    token1: 'token1',
    token1_account: 'token1_account',
    token2: 'token2',
    token2_account: 'token2_account',
    total_volume_24h: 'total_volume_24h',
    total_trade_24h: 'total_trade_24h',
    created_time: 'created_time'
  };

  export type PoolInfoScalarFieldEnum = (typeof PoolInfoScalarFieldEnum)[keyof typeof PoolInfoScalarFieldEnum]


  export const PoolDetailsScalarFieldEnum: {
    id: 'id',
    pool_address: 'pool_address',
    program_id: 'program_id',
    create_tx_hash: 'create_tx_hash',
    create_block_time: 'create_block_time',
    creator: 'creator',
    lp_token: 'lp_token'
  };

  export type PoolDetailsScalarFieldEnum = (typeof PoolDetailsScalarFieldEnum)[keyof typeof PoolDetailsScalarFieldEnum]


  export const TokenInfoScalarFieldEnum: {
    id: 'id',
    token: 'token',
    token_account: 'token_account',
    amount: 'amount',
    poolDetailsId: 'poolDetailsId'
  };

  export type TokenInfoScalarFieldEnum = (typeof TokenInfoScalarFieldEnum)[keyof typeof TokenInfoScalarFieldEnum]


  export const PoolMetricsScalarFieldEnum: {
    id: 'id',
    pool_address: 'pool_address',
    program_id: 'program_id',
    total_volume_24h: 'total_volume_24h',
    total_volume_change_24h: 'total_volume_change_24h',
    total_trades_24h: 'total_trades_24h',
    total_trades_change_24h: 'total_trades_change_24h',
    poolInfoId: 'poolInfoId'
  };

  export type PoolMetricsScalarFieldEnum = (typeof PoolMetricsScalarFieldEnum)[keyof typeof PoolMetricsScalarFieldEnum]


  export const MetricDayScalarFieldEnum: {
    id: 'id',
    day: 'day',
    value: 'value',
    poolMetricsId: 'poolMetricsId'
  };

  export type MetricDayScalarFieldEnum = (typeof MetricDayScalarFieldEnum)[keyof typeof MetricDayScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PoolInfoWhereInput = {
    AND?: PoolInfoWhereInput | PoolInfoWhereInput[]
    OR?: PoolInfoWhereInput[]
    NOT?: PoolInfoWhereInput | PoolInfoWhereInput[]
    id?: StringFilter<"PoolInfo"> | string
    volume_24h?: FloatFilter<"PoolInfo"> | number
    pool_address?: StringFilter<"PoolInfo"> | string
    program_id?: StringFilter<"PoolInfo"> | string
    token1?: StringNullableFilter<"PoolInfo"> | string | null
    token1_account?: StringNullableFilter<"PoolInfo"> | string | null
    token2?: StringNullableFilter<"PoolInfo"> | string | null
    token2_account?: StringNullableFilter<"PoolInfo"> | string | null
    total_volume_24h?: FloatNullableFilter<"PoolInfo"> | number | null
    total_trade_24h?: FloatNullableFilter<"PoolInfo"> | number | null
    created_time?: BigIntNullableFilter<"PoolInfo"> | bigint | number | null
    details?: XOR<PoolDetailsNullableScalarRelationFilter, PoolDetailsWhereInput> | null
    metrics?: PoolMetricsListRelationFilter
  }

  export type PoolInfoOrderByWithRelationInput = {
    id?: SortOrder
    volume_24h?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    token1?: SortOrderInput | SortOrder
    token1_account?: SortOrderInput | SortOrder
    token2?: SortOrderInput | SortOrder
    token2_account?: SortOrderInput | SortOrder
    total_volume_24h?: SortOrderInput | SortOrder
    total_trade_24h?: SortOrderInput | SortOrder
    created_time?: SortOrderInput | SortOrder
    details?: PoolDetailsOrderByWithRelationInput
    metrics?: PoolMetricsOrderByRelationAggregateInput
  }

  export type PoolInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pool_address?: string
    AND?: PoolInfoWhereInput | PoolInfoWhereInput[]
    OR?: PoolInfoWhereInput[]
    NOT?: PoolInfoWhereInput | PoolInfoWhereInput[]
    volume_24h?: FloatFilter<"PoolInfo"> | number
    program_id?: StringFilter<"PoolInfo"> | string
    token1?: StringNullableFilter<"PoolInfo"> | string | null
    token1_account?: StringNullableFilter<"PoolInfo"> | string | null
    token2?: StringNullableFilter<"PoolInfo"> | string | null
    token2_account?: StringNullableFilter<"PoolInfo"> | string | null
    total_volume_24h?: FloatNullableFilter<"PoolInfo"> | number | null
    total_trade_24h?: FloatNullableFilter<"PoolInfo"> | number | null
    created_time?: BigIntNullableFilter<"PoolInfo"> | bigint | number | null
    details?: XOR<PoolDetailsNullableScalarRelationFilter, PoolDetailsWhereInput> | null
    metrics?: PoolMetricsListRelationFilter
  }, "id" | "pool_address">

  export type PoolInfoOrderByWithAggregationInput = {
    id?: SortOrder
    volume_24h?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    token1?: SortOrderInput | SortOrder
    token1_account?: SortOrderInput | SortOrder
    token2?: SortOrderInput | SortOrder
    token2_account?: SortOrderInput | SortOrder
    total_volume_24h?: SortOrderInput | SortOrder
    total_trade_24h?: SortOrderInput | SortOrder
    created_time?: SortOrderInput | SortOrder
    _count?: PoolInfoCountOrderByAggregateInput
    _avg?: PoolInfoAvgOrderByAggregateInput
    _max?: PoolInfoMaxOrderByAggregateInput
    _min?: PoolInfoMinOrderByAggregateInput
    _sum?: PoolInfoSumOrderByAggregateInput
  }

  export type PoolInfoScalarWhereWithAggregatesInput = {
    AND?: PoolInfoScalarWhereWithAggregatesInput | PoolInfoScalarWhereWithAggregatesInput[]
    OR?: PoolInfoScalarWhereWithAggregatesInput[]
    NOT?: PoolInfoScalarWhereWithAggregatesInput | PoolInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PoolInfo"> | string
    volume_24h?: FloatWithAggregatesFilter<"PoolInfo"> | number
    pool_address?: StringWithAggregatesFilter<"PoolInfo"> | string
    program_id?: StringWithAggregatesFilter<"PoolInfo"> | string
    token1?: StringNullableWithAggregatesFilter<"PoolInfo"> | string | null
    token1_account?: StringNullableWithAggregatesFilter<"PoolInfo"> | string | null
    token2?: StringNullableWithAggregatesFilter<"PoolInfo"> | string | null
    token2_account?: StringNullableWithAggregatesFilter<"PoolInfo"> | string | null
    total_volume_24h?: FloatNullableWithAggregatesFilter<"PoolInfo"> | number | null
    total_trade_24h?: FloatNullableWithAggregatesFilter<"PoolInfo"> | number | null
    created_time?: BigIntNullableWithAggregatesFilter<"PoolInfo"> | bigint | number | null
  }

  export type PoolDetailsWhereInput = {
    AND?: PoolDetailsWhereInput | PoolDetailsWhereInput[]
    OR?: PoolDetailsWhereInput[]
    NOT?: PoolDetailsWhereInput | PoolDetailsWhereInput[]
    id?: StringFilter<"PoolDetails"> | string
    pool_address?: StringFilter<"PoolDetails"> | string
    program_id?: StringFilter<"PoolDetails"> | string
    create_tx_hash?: StringFilter<"PoolDetails"> | string
    create_block_time?: BigIntFilter<"PoolDetails"> | bigint | number
    creator?: StringFilter<"PoolDetails"> | string
    lp_token?: StringFilter<"PoolDetails"> | string
    tokens_info?: TokenInfoListRelationFilter
    pool?: XOR<PoolInfoScalarRelationFilter, PoolInfoWhereInput>
  }

  export type PoolDetailsOrderByWithRelationInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    create_tx_hash?: SortOrder
    create_block_time?: SortOrder
    creator?: SortOrder
    lp_token?: SortOrder
    tokens_info?: TokenInfoOrderByRelationAggregateInput
    pool?: PoolInfoOrderByWithRelationInput
  }

  export type PoolDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pool_address?: string
    AND?: PoolDetailsWhereInput | PoolDetailsWhereInput[]
    OR?: PoolDetailsWhereInput[]
    NOT?: PoolDetailsWhereInput | PoolDetailsWhereInput[]
    program_id?: StringFilter<"PoolDetails"> | string
    create_tx_hash?: StringFilter<"PoolDetails"> | string
    create_block_time?: BigIntFilter<"PoolDetails"> | bigint | number
    creator?: StringFilter<"PoolDetails"> | string
    lp_token?: StringFilter<"PoolDetails"> | string
    tokens_info?: TokenInfoListRelationFilter
    pool?: XOR<PoolInfoScalarRelationFilter, PoolInfoWhereInput>
  }, "id" | "pool_address">

  export type PoolDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    create_tx_hash?: SortOrder
    create_block_time?: SortOrder
    creator?: SortOrder
    lp_token?: SortOrder
    _count?: PoolDetailsCountOrderByAggregateInput
    _avg?: PoolDetailsAvgOrderByAggregateInput
    _max?: PoolDetailsMaxOrderByAggregateInput
    _min?: PoolDetailsMinOrderByAggregateInput
    _sum?: PoolDetailsSumOrderByAggregateInput
  }

  export type PoolDetailsScalarWhereWithAggregatesInput = {
    AND?: PoolDetailsScalarWhereWithAggregatesInput | PoolDetailsScalarWhereWithAggregatesInput[]
    OR?: PoolDetailsScalarWhereWithAggregatesInput[]
    NOT?: PoolDetailsScalarWhereWithAggregatesInput | PoolDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PoolDetails"> | string
    pool_address?: StringWithAggregatesFilter<"PoolDetails"> | string
    program_id?: StringWithAggregatesFilter<"PoolDetails"> | string
    create_tx_hash?: StringWithAggregatesFilter<"PoolDetails"> | string
    create_block_time?: BigIntWithAggregatesFilter<"PoolDetails"> | bigint | number
    creator?: StringWithAggregatesFilter<"PoolDetails"> | string
    lp_token?: StringWithAggregatesFilter<"PoolDetails"> | string
  }

  export type TokenInfoWhereInput = {
    AND?: TokenInfoWhereInput | TokenInfoWhereInput[]
    OR?: TokenInfoWhereInput[]
    NOT?: TokenInfoWhereInput | TokenInfoWhereInput[]
    id?: StringFilter<"TokenInfo"> | string
    token?: StringFilter<"TokenInfo"> | string
    token_account?: StringFilter<"TokenInfo"> | string
    amount?: FloatFilter<"TokenInfo"> | number
    poolDetailsId?: StringFilter<"TokenInfo"> | string
    poolDetails?: XOR<PoolDetailsScalarRelationFilter, PoolDetailsWhereInput>
  }

  export type TokenInfoOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    token_account?: SortOrder
    amount?: SortOrder
    poolDetailsId?: SortOrder
    poolDetails?: PoolDetailsOrderByWithRelationInput
  }

  export type TokenInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenInfoWhereInput | TokenInfoWhereInput[]
    OR?: TokenInfoWhereInput[]
    NOT?: TokenInfoWhereInput | TokenInfoWhereInput[]
    token?: StringFilter<"TokenInfo"> | string
    token_account?: StringFilter<"TokenInfo"> | string
    amount?: FloatFilter<"TokenInfo"> | number
    poolDetailsId?: StringFilter<"TokenInfo"> | string
    poolDetails?: XOR<PoolDetailsScalarRelationFilter, PoolDetailsWhereInput>
  }, "id">

  export type TokenInfoOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    token_account?: SortOrder
    amount?: SortOrder
    poolDetailsId?: SortOrder
    _count?: TokenInfoCountOrderByAggregateInput
    _avg?: TokenInfoAvgOrderByAggregateInput
    _max?: TokenInfoMaxOrderByAggregateInput
    _min?: TokenInfoMinOrderByAggregateInput
    _sum?: TokenInfoSumOrderByAggregateInput
  }

  export type TokenInfoScalarWhereWithAggregatesInput = {
    AND?: TokenInfoScalarWhereWithAggregatesInput | TokenInfoScalarWhereWithAggregatesInput[]
    OR?: TokenInfoScalarWhereWithAggregatesInput[]
    NOT?: TokenInfoScalarWhereWithAggregatesInput | TokenInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenInfo"> | string
    token?: StringWithAggregatesFilter<"TokenInfo"> | string
    token_account?: StringWithAggregatesFilter<"TokenInfo"> | string
    amount?: FloatWithAggregatesFilter<"TokenInfo"> | number
    poolDetailsId?: StringWithAggregatesFilter<"TokenInfo"> | string
  }

  export type PoolMetricsWhereInput = {
    AND?: PoolMetricsWhereInput | PoolMetricsWhereInput[]
    OR?: PoolMetricsWhereInput[]
    NOT?: PoolMetricsWhereInput | PoolMetricsWhereInput[]
    id?: StringFilter<"PoolMetrics"> | string
    pool_address?: StringFilter<"PoolMetrics"> | string
    program_id?: StringFilter<"PoolMetrics"> | string
    total_volume_24h?: FloatFilter<"PoolMetrics"> | number
    total_volume_change_24h?: FloatFilter<"PoolMetrics"> | number
    total_trades_24h?: FloatFilter<"PoolMetrics"> | number
    total_trades_change_24h?: FloatFilter<"PoolMetrics"> | number
    poolInfoId?: StringNullableFilter<"PoolMetrics"> | string | null
    poolInfo?: XOR<PoolInfoNullableScalarRelationFilter, PoolInfoWhereInput> | null
    days?: MetricDayListRelationFilter
  }

  export type PoolMetricsOrderByWithRelationInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    total_volume_24h?: SortOrder
    total_volume_change_24h?: SortOrder
    total_trades_24h?: SortOrder
    total_trades_change_24h?: SortOrder
    poolInfoId?: SortOrderInput | SortOrder
    poolInfo?: PoolInfoOrderByWithRelationInput
    days?: MetricDayOrderByRelationAggregateInput
  }

  export type PoolMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PoolMetricsWhereInput | PoolMetricsWhereInput[]
    OR?: PoolMetricsWhereInput[]
    NOT?: PoolMetricsWhereInput | PoolMetricsWhereInput[]
    pool_address?: StringFilter<"PoolMetrics"> | string
    program_id?: StringFilter<"PoolMetrics"> | string
    total_volume_24h?: FloatFilter<"PoolMetrics"> | number
    total_volume_change_24h?: FloatFilter<"PoolMetrics"> | number
    total_trades_24h?: FloatFilter<"PoolMetrics"> | number
    total_trades_change_24h?: FloatFilter<"PoolMetrics"> | number
    poolInfoId?: StringNullableFilter<"PoolMetrics"> | string | null
    poolInfo?: XOR<PoolInfoNullableScalarRelationFilter, PoolInfoWhereInput> | null
    days?: MetricDayListRelationFilter
  }, "id">

  export type PoolMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    total_volume_24h?: SortOrder
    total_volume_change_24h?: SortOrder
    total_trades_24h?: SortOrder
    total_trades_change_24h?: SortOrder
    poolInfoId?: SortOrderInput | SortOrder
    _count?: PoolMetricsCountOrderByAggregateInput
    _avg?: PoolMetricsAvgOrderByAggregateInput
    _max?: PoolMetricsMaxOrderByAggregateInput
    _min?: PoolMetricsMinOrderByAggregateInput
    _sum?: PoolMetricsSumOrderByAggregateInput
  }

  export type PoolMetricsScalarWhereWithAggregatesInput = {
    AND?: PoolMetricsScalarWhereWithAggregatesInput | PoolMetricsScalarWhereWithAggregatesInput[]
    OR?: PoolMetricsScalarWhereWithAggregatesInput[]
    NOT?: PoolMetricsScalarWhereWithAggregatesInput | PoolMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PoolMetrics"> | string
    pool_address?: StringWithAggregatesFilter<"PoolMetrics"> | string
    program_id?: StringWithAggregatesFilter<"PoolMetrics"> | string
    total_volume_24h?: FloatWithAggregatesFilter<"PoolMetrics"> | number
    total_volume_change_24h?: FloatWithAggregatesFilter<"PoolMetrics"> | number
    total_trades_24h?: FloatWithAggregatesFilter<"PoolMetrics"> | number
    total_trades_change_24h?: FloatWithAggregatesFilter<"PoolMetrics"> | number
    poolInfoId?: StringNullableWithAggregatesFilter<"PoolMetrics"> | string | null
  }

  export type MetricDayWhereInput = {
    AND?: MetricDayWhereInput | MetricDayWhereInput[]
    OR?: MetricDayWhereInput[]
    NOT?: MetricDayWhereInput | MetricDayWhereInput[]
    id?: StringFilter<"MetricDay"> | string
    day?: IntFilter<"MetricDay"> | number
    value?: FloatFilter<"MetricDay"> | number
    poolMetricsId?: StringFilter<"MetricDay"> | string
    poolMetrics?: XOR<PoolMetricsScalarRelationFilter, PoolMetricsWhereInput>
  }

  export type MetricDayOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    value?: SortOrder
    poolMetricsId?: SortOrder
    poolMetrics?: PoolMetricsOrderByWithRelationInput
  }

  export type MetricDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetricDayWhereInput | MetricDayWhereInput[]
    OR?: MetricDayWhereInput[]
    NOT?: MetricDayWhereInput | MetricDayWhereInput[]
    day?: IntFilter<"MetricDay"> | number
    value?: FloatFilter<"MetricDay"> | number
    poolMetricsId?: StringFilter<"MetricDay"> | string
    poolMetrics?: XOR<PoolMetricsScalarRelationFilter, PoolMetricsWhereInput>
  }, "id">

  export type MetricDayOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    value?: SortOrder
    poolMetricsId?: SortOrder
    _count?: MetricDayCountOrderByAggregateInput
    _avg?: MetricDayAvgOrderByAggregateInput
    _max?: MetricDayMaxOrderByAggregateInput
    _min?: MetricDayMinOrderByAggregateInput
    _sum?: MetricDaySumOrderByAggregateInput
  }

  export type MetricDayScalarWhereWithAggregatesInput = {
    AND?: MetricDayScalarWhereWithAggregatesInput | MetricDayScalarWhereWithAggregatesInput[]
    OR?: MetricDayScalarWhereWithAggregatesInput[]
    NOT?: MetricDayScalarWhereWithAggregatesInput | MetricDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetricDay"> | string
    day?: IntWithAggregatesFilter<"MetricDay"> | number
    value?: FloatWithAggregatesFilter<"MetricDay"> | number
    poolMetricsId?: StringWithAggregatesFilter<"MetricDay"> | string
  }

  export type PoolInfoCreateInput = {
    id?: string
    volume_24h: number
    pool_address: string
    program_id: string
    token1?: string | null
    token1_account?: string | null
    token2?: string | null
    token2_account?: string | null
    total_volume_24h?: number | null
    total_trade_24h?: number | null
    created_time?: bigint | number | null
    details?: PoolDetailsCreateNestedOneWithoutPoolInput
    metrics?: PoolMetricsCreateNestedManyWithoutPoolInfoInput
  }

  export type PoolInfoUncheckedCreateInput = {
    id?: string
    volume_24h: number
    pool_address: string
    program_id: string
    token1?: string | null
    token1_account?: string | null
    token2?: string | null
    token2_account?: string | null
    total_volume_24h?: number | null
    total_trade_24h?: number | null
    created_time?: bigint | number | null
    details?: PoolDetailsUncheckedCreateNestedOneWithoutPoolInput
    metrics?: PoolMetricsUncheckedCreateNestedManyWithoutPoolInfoInput
  }

  export type PoolInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume_24h?: FloatFieldUpdateOperationsInput | number
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    token1?: NullableStringFieldUpdateOperationsInput | string | null
    token1_account?: NullableStringFieldUpdateOperationsInput | string | null
    token2?: NullableStringFieldUpdateOperationsInput | string | null
    token2_account?: NullableStringFieldUpdateOperationsInput | string | null
    total_volume_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    total_trade_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    created_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    details?: PoolDetailsUpdateOneWithoutPoolNestedInput
    metrics?: PoolMetricsUpdateManyWithoutPoolInfoNestedInput
  }

  export type PoolInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume_24h?: FloatFieldUpdateOperationsInput | number
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    token1?: NullableStringFieldUpdateOperationsInput | string | null
    token1_account?: NullableStringFieldUpdateOperationsInput | string | null
    token2?: NullableStringFieldUpdateOperationsInput | string | null
    token2_account?: NullableStringFieldUpdateOperationsInput | string | null
    total_volume_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    total_trade_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    created_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    details?: PoolDetailsUncheckedUpdateOneWithoutPoolNestedInput
    metrics?: PoolMetricsUncheckedUpdateManyWithoutPoolInfoNestedInput
  }

  export type PoolInfoCreateManyInput = {
    id?: string
    volume_24h: number
    pool_address: string
    program_id: string
    token1?: string | null
    token1_account?: string | null
    token2?: string | null
    token2_account?: string | null
    total_volume_24h?: number | null
    total_trade_24h?: number | null
    created_time?: bigint | number | null
  }

  export type PoolInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume_24h?: FloatFieldUpdateOperationsInput | number
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    token1?: NullableStringFieldUpdateOperationsInput | string | null
    token1_account?: NullableStringFieldUpdateOperationsInput | string | null
    token2?: NullableStringFieldUpdateOperationsInput | string | null
    token2_account?: NullableStringFieldUpdateOperationsInput | string | null
    total_volume_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    total_trade_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    created_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type PoolInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume_24h?: FloatFieldUpdateOperationsInput | number
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    token1?: NullableStringFieldUpdateOperationsInput | string | null
    token1_account?: NullableStringFieldUpdateOperationsInput | string | null
    token2?: NullableStringFieldUpdateOperationsInput | string | null
    token2_account?: NullableStringFieldUpdateOperationsInput | string | null
    total_volume_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    total_trade_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    created_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type PoolDetailsCreateInput = {
    id?: string
    program_id: string
    create_tx_hash: string
    create_block_time: bigint | number
    creator: string
    lp_token: string
    tokens_info?: TokenInfoCreateNestedManyWithoutPoolDetailsInput
    pool: PoolInfoCreateNestedOneWithoutDetailsInput
  }

  export type PoolDetailsUncheckedCreateInput = {
    id?: string
    pool_address: string
    program_id: string
    create_tx_hash: string
    create_block_time: bigint | number
    creator: string
    lp_token: string
    tokens_info?: TokenInfoUncheckedCreateNestedManyWithoutPoolDetailsInput
  }

  export type PoolDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    create_tx_hash?: StringFieldUpdateOperationsInput | string
    create_block_time?: BigIntFieldUpdateOperationsInput | bigint | number
    creator?: StringFieldUpdateOperationsInput | string
    lp_token?: StringFieldUpdateOperationsInput | string
    tokens_info?: TokenInfoUpdateManyWithoutPoolDetailsNestedInput
    pool?: PoolInfoUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type PoolDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    create_tx_hash?: StringFieldUpdateOperationsInput | string
    create_block_time?: BigIntFieldUpdateOperationsInput | bigint | number
    creator?: StringFieldUpdateOperationsInput | string
    lp_token?: StringFieldUpdateOperationsInput | string
    tokens_info?: TokenInfoUncheckedUpdateManyWithoutPoolDetailsNestedInput
  }

  export type PoolDetailsCreateManyInput = {
    id?: string
    pool_address: string
    program_id: string
    create_tx_hash: string
    create_block_time: bigint | number
    creator: string
    lp_token: string
  }

  export type PoolDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    create_tx_hash?: StringFieldUpdateOperationsInput | string
    create_block_time?: BigIntFieldUpdateOperationsInput | bigint | number
    creator?: StringFieldUpdateOperationsInput | string
    lp_token?: StringFieldUpdateOperationsInput | string
  }

  export type PoolDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    create_tx_hash?: StringFieldUpdateOperationsInput | string
    create_block_time?: BigIntFieldUpdateOperationsInput | bigint | number
    creator?: StringFieldUpdateOperationsInput | string
    lp_token?: StringFieldUpdateOperationsInput | string
  }

  export type TokenInfoCreateInput = {
    id?: string
    token: string
    token_account: string
    amount: number
    poolDetails: PoolDetailsCreateNestedOneWithoutTokens_infoInput
  }

  export type TokenInfoUncheckedCreateInput = {
    id?: string
    token: string
    token_account: string
    amount: number
    poolDetailsId: string
  }

  export type TokenInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_account?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    poolDetails?: PoolDetailsUpdateOneRequiredWithoutTokens_infoNestedInput
  }

  export type TokenInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_account?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    poolDetailsId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenInfoCreateManyInput = {
    id?: string
    token: string
    token_account: string
    amount: number
    poolDetailsId: string
  }

  export type TokenInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_account?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type TokenInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_account?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    poolDetailsId?: StringFieldUpdateOperationsInput | string
  }

  export type PoolMetricsCreateInput = {
    id?: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    poolInfo?: PoolInfoCreateNestedOneWithoutMetricsInput
    days?: MetricDayCreateNestedManyWithoutPoolMetricsInput
  }

  export type PoolMetricsUncheckedCreateInput = {
    id?: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    poolInfoId?: string | null
    days?: MetricDayUncheckedCreateNestedManyWithoutPoolMetricsInput
  }

  export type PoolMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
    poolInfo?: PoolInfoUpdateOneWithoutMetricsNestedInput
    days?: MetricDayUpdateManyWithoutPoolMetricsNestedInput
  }

  export type PoolMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
    poolInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    days?: MetricDayUncheckedUpdateManyWithoutPoolMetricsNestedInput
  }

  export type PoolMetricsCreateManyInput = {
    id?: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    poolInfoId?: string | null
  }

  export type PoolMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
  }

  export type PoolMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
    poolInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetricDayCreateInput = {
    id?: string
    day: number
    value: number
    poolMetrics: PoolMetricsCreateNestedOneWithoutDaysInput
  }

  export type MetricDayUncheckedCreateInput = {
    id?: string
    day: number
    value: number
    poolMetricsId: string
  }

  export type MetricDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    poolMetrics?: PoolMetricsUpdateOneRequiredWithoutDaysNestedInput
  }

  export type MetricDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    poolMetricsId?: StringFieldUpdateOperationsInput | string
  }

  export type MetricDayCreateManyInput = {
    id?: string
    day: number
    value: number
    poolMetricsId: string
  }

  export type MetricDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    poolMetricsId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type PoolDetailsNullableScalarRelationFilter = {
    is?: PoolDetailsWhereInput | null
    isNot?: PoolDetailsWhereInput | null
  }

  export type PoolMetricsListRelationFilter = {
    every?: PoolMetricsWhereInput
    some?: PoolMetricsWhereInput
    none?: PoolMetricsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PoolMetricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoolInfoCountOrderByAggregateInput = {
    id?: SortOrder
    volume_24h?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    token1?: SortOrder
    token1_account?: SortOrder
    token2?: SortOrder
    token2_account?: SortOrder
    total_volume_24h?: SortOrder
    total_trade_24h?: SortOrder
    created_time?: SortOrder
  }

  export type PoolInfoAvgOrderByAggregateInput = {
    volume_24h?: SortOrder
    total_volume_24h?: SortOrder
    total_trade_24h?: SortOrder
    created_time?: SortOrder
  }

  export type PoolInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    volume_24h?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    token1?: SortOrder
    token1_account?: SortOrder
    token2?: SortOrder
    token2_account?: SortOrder
    total_volume_24h?: SortOrder
    total_trade_24h?: SortOrder
    created_time?: SortOrder
  }

  export type PoolInfoMinOrderByAggregateInput = {
    id?: SortOrder
    volume_24h?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    token1?: SortOrder
    token1_account?: SortOrder
    token2?: SortOrder
    token2_account?: SortOrder
    total_volume_24h?: SortOrder
    total_trade_24h?: SortOrder
    created_time?: SortOrder
  }

  export type PoolInfoSumOrderByAggregateInput = {
    volume_24h?: SortOrder
    total_volume_24h?: SortOrder
    total_trade_24h?: SortOrder
    created_time?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type TokenInfoListRelationFilter = {
    every?: TokenInfoWhereInput
    some?: TokenInfoWhereInput
    none?: TokenInfoWhereInput
  }

  export type PoolInfoScalarRelationFilter = {
    is?: PoolInfoWhereInput
    isNot?: PoolInfoWhereInput
  }

  export type TokenInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoolDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    create_tx_hash?: SortOrder
    create_block_time?: SortOrder
    creator?: SortOrder
    lp_token?: SortOrder
  }

  export type PoolDetailsAvgOrderByAggregateInput = {
    create_block_time?: SortOrder
  }

  export type PoolDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    create_tx_hash?: SortOrder
    create_block_time?: SortOrder
    creator?: SortOrder
    lp_token?: SortOrder
  }

  export type PoolDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    create_tx_hash?: SortOrder
    create_block_time?: SortOrder
    creator?: SortOrder
    lp_token?: SortOrder
  }

  export type PoolDetailsSumOrderByAggregateInput = {
    create_block_time?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type PoolDetailsScalarRelationFilter = {
    is?: PoolDetailsWhereInput
    isNot?: PoolDetailsWhereInput
  }

  export type TokenInfoCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    token_account?: SortOrder
    amount?: SortOrder
    poolDetailsId?: SortOrder
  }

  export type TokenInfoAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TokenInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    token_account?: SortOrder
    amount?: SortOrder
    poolDetailsId?: SortOrder
  }

  export type TokenInfoMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    token_account?: SortOrder
    amount?: SortOrder
    poolDetailsId?: SortOrder
  }

  export type TokenInfoSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PoolInfoNullableScalarRelationFilter = {
    is?: PoolInfoWhereInput | null
    isNot?: PoolInfoWhereInput | null
  }

  export type MetricDayListRelationFilter = {
    every?: MetricDayWhereInput
    some?: MetricDayWhereInput
    none?: MetricDayWhereInput
  }

  export type MetricDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoolMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    total_volume_24h?: SortOrder
    total_volume_change_24h?: SortOrder
    total_trades_24h?: SortOrder
    total_trades_change_24h?: SortOrder
    poolInfoId?: SortOrder
  }

  export type PoolMetricsAvgOrderByAggregateInput = {
    total_volume_24h?: SortOrder
    total_volume_change_24h?: SortOrder
    total_trades_24h?: SortOrder
    total_trades_change_24h?: SortOrder
  }

  export type PoolMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    total_volume_24h?: SortOrder
    total_volume_change_24h?: SortOrder
    total_trades_24h?: SortOrder
    total_trades_change_24h?: SortOrder
    poolInfoId?: SortOrder
  }

  export type PoolMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    pool_address?: SortOrder
    program_id?: SortOrder
    total_volume_24h?: SortOrder
    total_volume_change_24h?: SortOrder
    total_trades_24h?: SortOrder
    total_trades_change_24h?: SortOrder
    poolInfoId?: SortOrder
  }

  export type PoolMetricsSumOrderByAggregateInput = {
    total_volume_24h?: SortOrder
    total_volume_change_24h?: SortOrder
    total_trades_24h?: SortOrder
    total_trades_change_24h?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PoolMetricsScalarRelationFilter = {
    is?: PoolMetricsWhereInput
    isNot?: PoolMetricsWhereInput
  }

  export type MetricDayCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    value?: SortOrder
    poolMetricsId?: SortOrder
  }

  export type MetricDayAvgOrderByAggregateInput = {
    day?: SortOrder
    value?: SortOrder
  }

  export type MetricDayMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    value?: SortOrder
    poolMetricsId?: SortOrder
  }

  export type MetricDayMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    value?: SortOrder
    poolMetricsId?: SortOrder
  }

  export type MetricDaySumOrderByAggregateInput = {
    day?: SortOrder
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PoolDetailsCreateNestedOneWithoutPoolInput = {
    create?: XOR<PoolDetailsCreateWithoutPoolInput, PoolDetailsUncheckedCreateWithoutPoolInput>
    connectOrCreate?: PoolDetailsCreateOrConnectWithoutPoolInput
    connect?: PoolDetailsWhereUniqueInput
  }

  export type PoolMetricsCreateNestedManyWithoutPoolInfoInput = {
    create?: XOR<PoolMetricsCreateWithoutPoolInfoInput, PoolMetricsUncheckedCreateWithoutPoolInfoInput> | PoolMetricsCreateWithoutPoolInfoInput[] | PoolMetricsUncheckedCreateWithoutPoolInfoInput[]
    connectOrCreate?: PoolMetricsCreateOrConnectWithoutPoolInfoInput | PoolMetricsCreateOrConnectWithoutPoolInfoInput[]
    createMany?: PoolMetricsCreateManyPoolInfoInputEnvelope
    connect?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
  }

  export type PoolDetailsUncheckedCreateNestedOneWithoutPoolInput = {
    create?: XOR<PoolDetailsCreateWithoutPoolInput, PoolDetailsUncheckedCreateWithoutPoolInput>
    connectOrCreate?: PoolDetailsCreateOrConnectWithoutPoolInput
    connect?: PoolDetailsWhereUniqueInput
  }

  export type PoolMetricsUncheckedCreateNestedManyWithoutPoolInfoInput = {
    create?: XOR<PoolMetricsCreateWithoutPoolInfoInput, PoolMetricsUncheckedCreateWithoutPoolInfoInput> | PoolMetricsCreateWithoutPoolInfoInput[] | PoolMetricsUncheckedCreateWithoutPoolInfoInput[]
    connectOrCreate?: PoolMetricsCreateOrConnectWithoutPoolInfoInput | PoolMetricsCreateOrConnectWithoutPoolInfoInput[]
    createMany?: PoolMetricsCreateManyPoolInfoInputEnvelope
    connect?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type PoolDetailsUpdateOneWithoutPoolNestedInput = {
    create?: XOR<PoolDetailsCreateWithoutPoolInput, PoolDetailsUncheckedCreateWithoutPoolInput>
    connectOrCreate?: PoolDetailsCreateOrConnectWithoutPoolInput
    upsert?: PoolDetailsUpsertWithoutPoolInput
    disconnect?: PoolDetailsWhereInput | boolean
    delete?: PoolDetailsWhereInput | boolean
    connect?: PoolDetailsWhereUniqueInput
    update?: XOR<XOR<PoolDetailsUpdateToOneWithWhereWithoutPoolInput, PoolDetailsUpdateWithoutPoolInput>, PoolDetailsUncheckedUpdateWithoutPoolInput>
  }

  export type PoolMetricsUpdateManyWithoutPoolInfoNestedInput = {
    create?: XOR<PoolMetricsCreateWithoutPoolInfoInput, PoolMetricsUncheckedCreateWithoutPoolInfoInput> | PoolMetricsCreateWithoutPoolInfoInput[] | PoolMetricsUncheckedCreateWithoutPoolInfoInput[]
    connectOrCreate?: PoolMetricsCreateOrConnectWithoutPoolInfoInput | PoolMetricsCreateOrConnectWithoutPoolInfoInput[]
    upsert?: PoolMetricsUpsertWithWhereUniqueWithoutPoolInfoInput | PoolMetricsUpsertWithWhereUniqueWithoutPoolInfoInput[]
    createMany?: PoolMetricsCreateManyPoolInfoInputEnvelope
    set?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
    disconnect?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
    delete?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
    connect?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
    update?: PoolMetricsUpdateWithWhereUniqueWithoutPoolInfoInput | PoolMetricsUpdateWithWhereUniqueWithoutPoolInfoInput[]
    updateMany?: PoolMetricsUpdateManyWithWhereWithoutPoolInfoInput | PoolMetricsUpdateManyWithWhereWithoutPoolInfoInput[]
    deleteMany?: PoolMetricsScalarWhereInput | PoolMetricsScalarWhereInput[]
  }

  export type PoolDetailsUncheckedUpdateOneWithoutPoolNestedInput = {
    create?: XOR<PoolDetailsCreateWithoutPoolInput, PoolDetailsUncheckedCreateWithoutPoolInput>
    connectOrCreate?: PoolDetailsCreateOrConnectWithoutPoolInput
    upsert?: PoolDetailsUpsertWithoutPoolInput
    disconnect?: PoolDetailsWhereInput | boolean
    delete?: PoolDetailsWhereInput | boolean
    connect?: PoolDetailsWhereUniqueInput
    update?: XOR<XOR<PoolDetailsUpdateToOneWithWhereWithoutPoolInput, PoolDetailsUpdateWithoutPoolInput>, PoolDetailsUncheckedUpdateWithoutPoolInput>
  }

  export type PoolMetricsUncheckedUpdateManyWithoutPoolInfoNestedInput = {
    create?: XOR<PoolMetricsCreateWithoutPoolInfoInput, PoolMetricsUncheckedCreateWithoutPoolInfoInput> | PoolMetricsCreateWithoutPoolInfoInput[] | PoolMetricsUncheckedCreateWithoutPoolInfoInput[]
    connectOrCreate?: PoolMetricsCreateOrConnectWithoutPoolInfoInput | PoolMetricsCreateOrConnectWithoutPoolInfoInput[]
    upsert?: PoolMetricsUpsertWithWhereUniqueWithoutPoolInfoInput | PoolMetricsUpsertWithWhereUniqueWithoutPoolInfoInput[]
    createMany?: PoolMetricsCreateManyPoolInfoInputEnvelope
    set?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
    disconnect?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
    delete?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
    connect?: PoolMetricsWhereUniqueInput | PoolMetricsWhereUniqueInput[]
    update?: PoolMetricsUpdateWithWhereUniqueWithoutPoolInfoInput | PoolMetricsUpdateWithWhereUniqueWithoutPoolInfoInput[]
    updateMany?: PoolMetricsUpdateManyWithWhereWithoutPoolInfoInput | PoolMetricsUpdateManyWithWhereWithoutPoolInfoInput[]
    deleteMany?: PoolMetricsScalarWhereInput | PoolMetricsScalarWhereInput[]
  }

  export type TokenInfoCreateNestedManyWithoutPoolDetailsInput = {
    create?: XOR<TokenInfoCreateWithoutPoolDetailsInput, TokenInfoUncheckedCreateWithoutPoolDetailsInput> | TokenInfoCreateWithoutPoolDetailsInput[] | TokenInfoUncheckedCreateWithoutPoolDetailsInput[]
    connectOrCreate?: TokenInfoCreateOrConnectWithoutPoolDetailsInput | TokenInfoCreateOrConnectWithoutPoolDetailsInput[]
    createMany?: TokenInfoCreateManyPoolDetailsInputEnvelope
    connect?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
  }

  export type PoolInfoCreateNestedOneWithoutDetailsInput = {
    create?: XOR<PoolInfoCreateWithoutDetailsInput, PoolInfoUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: PoolInfoCreateOrConnectWithoutDetailsInput
    connect?: PoolInfoWhereUniqueInput
  }

  export type TokenInfoUncheckedCreateNestedManyWithoutPoolDetailsInput = {
    create?: XOR<TokenInfoCreateWithoutPoolDetailsInput, TokenInfoUncheckedCreateWithoutPoolDetailsInput> | TokenInfoCreateWithoutPoolDetailsInput[] | TokenInfoUncheckedCreateWithoutPoolDetailsInput[]
    connectOrCreate?: TokenInfoCreateOrConnectWithoutPoolDetailsInput | TokenInfoCreateOrConnectWithoutPoolDetailsInput[]
    createMany?: TokenInfoCreateManyPoolDetailsInputEnvelope
    connect?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type TokenInfoUpdateManyWithoutPoolDetailsNestedInput = {
    create?: XOR<TokenInfoCreateWithoutPoolDetailsInput, TokenInfoUncheckedCreateWithoutPoolDetailsInput> | TokenInfoCreateWithoutPoolDetailsInput[] | TokenInfoUncheckedCreateWithoutPoolDetailsInput[]
    connectOrCreate?: TokenInfoCreateOrConnectWithoutPoolDetailsInput | TokenInfoCreateOrConnectWithoutPoolDetailsInput[]
    upsert?: TokenInfoUpsertWithWhereUniqueWithoutPoolDetailsInput | TokenInfoUpsertWithWhereUniqueWithoutPoolDetailsInput[]
    createMany?: TokenInfoCreateManyPoolDetailsInputEnvelope
    set?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
    disconnect?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
    delete?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
    connect?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
    update?: TokenInfoUpdateWithWhereUniqueWithoutPoolDetailsInput | TokenInfoUpdateWithWhereUniqueWithoutPoolDetailsInput[]
    updateMany?: TokenInfoUpdateManyWithWhereWithoutPoolDetailsInput | TokenInfoUpdateManyWithWhereWithoutPoolDetailsInput[]
    deleteMany?: TokenInfoScalarWhereInput | TokenInfoScalarWhereInput[]
  }

  export type PoolInfoUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<PoolInfoCreateWithoutDetailsInput, PoolInfoUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: PoolInfoCreateOrConnectWithoutDetailsInput
    upsert?: PoolInfoUpsertWithoutDetailsInput
    connect?: PoolInfoWhereUniqueInput
    update?: XOR<XOR<PoolInfoUpdateToOneWithWhereWithoutDetailsInput, PoolInfoUpdateWithoutDetailsInput>, PoolInfoUncheckedUpdateWithoutDetailsInput>
  }

  export type TokenInfoUncheckedUpdateManyWithoutPoolDetailsNestedInput = {
    create?: XOR<TokenInfoCreateWithoutPoolDetailsInput, TokenInfoUncheckedCreateWithoutPoolDetailsInput> | TokenInfoCreateWithoutPoolDetailsInput[] | TokenInfoUncheckedCreateWithoutPoolDetailsInput[]
    connectOrCreate?: TokenInfoCreateOrConnectWithoutPoolDetailsInput | TokenInfoCreateOrConnectWithoutPoolDetailsInput[]
    upsert?: TokenInfoUpsertWithWhereUniqueWithoutPoolDetailsInput | TokenInfoUpsertWithWhereUniqueWithoutPoolDetailsInput[]
    createMany?: TokenInfoCreateManyPoolDetailsInputEnvelope
    set?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
    disconnect?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
    delete?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
    connect?: TokenInfoWhereUniqueInput | TokenInfoWhereUniqueInput[]
    update?: TokenInfoUpdateWithWhereUniqueWithoutPoolDetailsInput | TokenInfoUpdateWithWhereUniqueWithoutPoolDetailsInput[]
    updateMany?: TokenInfoUpdateManyWithWhereWithoutPoolDetailsInput | TokenInfoUpdateManyWithWhereWithoutPoolDetailsInput[]
    deleteMany?: TokenInfoScalarWhereInput | TokenInfoScalarWhereInput[]
  }

  export type PoolDetailsCreateNestedOneWithoutTokens_infoInput = {
    create?: XOR<PoolDetailsCreateWithoutTokens_infoInput, PoolDetailsUncheckedCreateWithoutTokens_infoInput>
    connectOrCreate?: PoolDetailsCreateOrConnectWithoutTokens_infoInput
    connect?: PoolDetailsWhereUniqueInput
  }

  export type PoolDetailsUpdateOneRequiredWithoutTokens_infoNestedInput = {
    create?: XOR<PoolDetailsCreateWithoutTokens_infoInput, PoolDetailsUncheckedCreateWithoutTokens_infoInput>
    connectOrCreate?: PoolDetailsCreateOrConnectWithoutTokens_infoInput
    upsert?: PoolDetailsUpsertWithoutTokens_infoInput
    connect?: PoolDetailsWhereUniqueInput
    update?: XOR<XOR<PoolDetailsUpdateToOneWithWhereWithoutTokens_infoInput, PoolDetailsUpdateWithoutTokens_infoInput>, PoolDetailsUncheckedUpdateWithoutTokens_infoInput>
  }

  export type PoolInfoCreateNestedOneWithoutMetricsInput = {
    create?: XOR<PoolInfoCreateWithoutMetricsInput, PoolInfoUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: PoolInfoCreateOrConnectWithoutMetricsInput
    connect?: PoolInfoWhereUniqueInput
  }

  export type MetricDayCreateNestedManyWithoutPoolMetricsInput = {
    create?: XOR<MetricDayCreateWithoutPoolMetricsInput, MetricDayUncheckedCreateWithoutPoolMetricsInput> | MetricDayCreateWithoutPoolMetricsInput[] | MetricDayUncheckedCreateWithoutPoolMetricsInput[]
    connectOrCreate?: MetricDayCreateOrConnectWithoutPoolMetricsInput | MetricDayCreateOrConnectWithoutPoolMetricsInput[]
    createMany?: MetricDayCreateManyPoolMetricsInputEnvelope
    connect?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
  }

  export type MetricDayUncheckedCreateNestedManyWithoutPoolMetricsInput = {
    create?: XOR<MetricDayCreateWithoutPoolMetricsInput, MetricDayUncheckedCreateWithoutPoolMetricsInput> | MetricDayCreateWithoutPoolMetricsInput[] | MetricDayUncheckedCreateWithoutPoolMetricsInput[]
    connectOrCreate?: MetricDayCreateOrConnectWithoutPoolMetricsInput | MetricDayCreateOrConnectWithoutPoolMetricsInput[]
    createMany?: MetricDayCreateManyPoolMetricsInputEnvelope
    connect?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
  }

  export type PoolInfoUpdateOneWithoutMetricsNestedInput = {
    create?: XOR<PoolInfoCreateWithoutMetricsInput, PoolInfoUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: PoolInfoCreateOrConnectWithoutMetricsInput
    upsert?: PoolInfoUpsertWithoutMetricsInput
    disconnect?: PoolInfoWhereInput | boolean
    delete?: PoolInfoWhereInput | boolean
    connect?: PoolInfoWhereUniqueInput
    update?: XOR<XOR<PoolInfoUpdateToOneWithWhereWithoutMetricsInput, PoolInfoUpdateWithoutMetricsInput>, PoolInfoUncheckedUpdateWithoutMetricsInput>
  }

  export type MetricDayUpdateManyWithoutPoolMetricsNestedInput = {
    create?: XOR<MetricDayCreateWithoutPoolMetricsInput, MetricDayUncheckedCreateWithoutPoolMetricsInput> | MetricDayCreateWithoutPoolMetricsInput[] | MetricDayUncheckedCreateWithoutPoolMetricsInput[]
    connectOrCreate?: MetricDayCreateOrConnectWithoutPoolMetricsInput | MetricDayCreateOrConnectWithoutPoolMetricsInput[]
    upsert?: MetricDayUpsertWithWhereUniqueWithoutPoolMetricsInput | MetricDayUpsertWithWhereUniqueWithoutPoolMetricsInput[]
    createMany?: MetricDayCreateManyPoolMetricsInputEnvelope
    set?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
    disconnect?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
    delete?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
    connect?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
    update?: MetricDayUpdateWithWhereUniqueWithoutPoolMetricsInput | MetricDayUpdateWithWhereUniqueWithoutPoolMetricsInput[]
    updateMany?: MetricDayUpdateManyWithWhereWithoutPoolMetricsInput | MetricDayUpdateManyWithWhereWithoutPoolMetricsInput[]
    deleteMany?: MetricDayScalarWhereInput | MetricDayScalarWhereInput[]
  }

  export type MetricDayUncheckedUpdateManyWithoutPoolMetricsNestedInput = {
    create?: XOR<MetricDayCreateWithoutPoolMetricsInput, MetricDayUncheckedCreateWithoutPoolMetricsInput> | MetricDayCreateWithoutPoolMetricsInput[] | MetricDayUncheckedCreateWithoutPoolMetricsInput[]
    connectOrCreate?: MetricDayCreateOrConnectWithoutPoolMetricsInput | MetricDayCreateOrConnectWithoutPoolMetricsInput[]
    upsert?: MetricDayUpsertWithWhereUniqueWithoutPoolMetricsInput | MetricDayUpsertWithWhereUniqueWithoutPoolMetricsInput[]
    createMany?: MetricDayCreateManyPoolMetricsInputEnvelope
    set?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
    disconnect?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
    delete?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
    connect?: MetricDayWhereUniqueInput | MetricDayWhereUniqueInput[]
    update?: MetricDayUpdateWithWhereUniqueWithoutPoolMetricsInput | MetricDayUpdateWithWhereUniqueWithoutPoolMetricsInput[]
    updateMany?: MetricDayUpdateManyWithWhereWithoutPoolMetricsInput | MetricDayUpdateManyWithWhereWithoutPoolMetricsInput[]
    deleteMany?: MetricDayScalarWhereInput | MetricDayScalarWhereInput[]
  }

  export type PoolMetricsCreateNestedOneWithoutDaysInput = {
    create?: XOR<PoolMetricsCreateWithoutDaysInput, PoolMetricsUncheckedCreateWithoutDaysInput>
    connectOrCreate?: PoolMetricsCreateOrConnectWithoutDaysInput
    connect?: PoolMetricsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PoolMetricsUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<PoolMetricsCreateWithoutDaysInput, PoolMetricsUncheckedCreateWithoutDaysInput>
    connectOrCreate?: PoolMetricsCreateOrConnectWithoutDaysInput
    upsert?: PoolMetricsUpsertWithoutDaysInput
    connect?: PoolMetricsWhereUniqueInput
    update?: XOR<XOR<PoolMetricsUpdateToOneWithWhereWithoutDaysInput, PoolMetricsUpdateWithoutDaysInput>, PoolMetricsUncheckedUpdateWithoutDaysInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PoolDetailsCreateWithoutPoolInput = {
    id?: string
    program_id: string
    create_tx_hash: string
    create_block_time: bigint | number
    creator: string
    lp_token: string
    tokens_info?: TokenInfoCreateNestedManyWithoutPoolDetailsInput
  }

  export type PoolDetailsUncheckedCreateWithoutPoolInput = {
    id?: string
    program_id: string
    create_tx_hash: string
    create_block_time: bigint | number
    creator: string
    lp_token: string
    tokens_info?: TokenInfoUncheckedCreateNestedManyWithoutPoolDetailsInput
  }

  export type PoolDetailsCreateOrConnectWithoutPoolInput = {
    where: PoolDetailsWhereUniqueInput
    create: XOR<PoolDetailsCreateWithoutPoolInput, PoolDetailsUncheckedCreateWithoutPoolInput>
  }

  export type PoolMetricsCreateWithoutPoolInfoInput = {
    id?: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    days?: MetricDayCreateNestedManyWithoutPoolMetricsInput
  }

  export type PoolMetricsUncheckedCreateWithoutPoolInfoInput = {
    id?: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    days?: MetricDayUncheckedCreateNestedManyWithoutPoolMetricsInput
  }

  export type PoolMetricsCreateOrConnectWithoutPoolInfoInput = {
    where: PoolMetricsWhereUniqueInput
    create: XOR<PoolMetricsCreateWithoutPoolInfoInput, PoolMetricsUncheckedCreateWithoutPoolInfoInput>
  }

  export type PoolMetricsCreateManyPoolInfoInputEnvelope = {
    data: PoolMetricsCreateManyPoolInfoInput | PoolMetricsCreateManyPoolInfoInput[]
    skipDuplicates?: boolean
  }

  export type PoolDetailsUpsertWithoutPoolInput = {
    update: XOR<PoolDetailsUpdateWithoutPoolInput, PoolDetailsUncheckedUpdateWithoutPoolInput>
    create: XOR<PoolDetailsCreateWithoutPoolInput, PoolDetailsUncheckedCreateWithoutPoolInput>
    where?: PoolDetailsWhereInput
  }

  export type PoolDetailsUpdateToOneWithWhereWithoutPoolInput = {
    where?: PoolDetailsWhereInput
    data: XOR<PoolDetailsUpdateWithoutPoolInput, PoolDetailsUncheckedUpdateWithoutPoolInput>
  }

  export type PoolDetailsUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    create_tx_hash?: StringFieldUpdateOperationsInput | string
    create_block_time?: BigIntFieldUpdateOperationsInput | bigint | number
    creator?: StringFieldUpdateOperationsInput | string
    lp_token?: StringFieldUpdateOperationsInput | string
    tokens_info?: TokenInfoUpdateManyWithoutPoolDetailsNestedInput
  }

  export type PoolDetailsUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    create_tx_hash?: StringFieldUpdateOperationsInput | string
    create_block_time?: BigIntFieldUpdateOperationsInput | bigint | number
    creator?: StringFieldUpdateOperationsInput | string
    lp_token?: StringFieldUpdateOperationsInput | string
    tokens_info?: TokenInfoUncheckedUpdateManyWithoutPoolDetailsNestedInput
  }

  export type PoolMetricsUpsertWithWhereUniqueWithoutPoolInfoInput = {
    where: PoolMetricsWhereUniqueInput
    update: XOR<PoolMetricsUpdateWithoutPoolInfoInput, PoolMetricsUncheckedUpdateWithoutPoolInfoInput>
    create: XOR<PoolMetricsCreateWithoutPoolInfoInput, PoolMetricsUncheckedCreateWithoutPoolInfoInput>
  }

  export type PoolMetricsUpdateWithWhereUniqueWithoutPoolInfoInput = {
    where: PoolMetricsWhereUniqueInput
    data: XOR<PoolMetricsUpdateWithoutPoolInfoInput, PoolMetricsUncheckedUpdateWithoutPoolInfoInput>
  }

  export type PoolMetricsUpdateManyWithWhereWithoutPoolInfoInput = {
    where: PoolMetricsScalarWhereInput
    data: XOR<PoolMetricsUpdateManyMutationInput, PoolMetricsUncheckedUpdateManyWithoutPoolInfoInput>
  }

  export type PoolMetricsScalarWhereInput = {
    AND?: PoolMetricsScalarWhereInput | PoolMetricsScalarWhereInput[]
    OR?: PoolMetricsScalarWhereInput[]
    NOT?: PoolMetricsScalarWhereInput | PoolMetricsScalarWhereInput[]
    id?: StringFilter<"PoolMetrics"> | string
    pool_address?: StringFilter<"PoolMetrics"> | string
    program_id?: StringFilter<"PoolMetrics"> | string
    total_volume_24h?: FloatFilter<"PoolMetrics"> | number
    total_volume_change_24h?: FloatFilter<"PoolMetrics"> | number
    total_trades_24h?: FloatFilter<"PoolMetrics"> | number
    total_trades_change_24h?: FloatFilter<"PoolMetrics"> | number
    poolInfoId?: StringNullableFilter<"PoolMetrics"> | string | null
  }

  export type TokenInfoCreateWithoutPoolDetailsInput = {
    id?: string
    token: string
    token_account: string
    amount: number
  }

  export type TokenInfoUncheckedCreateWithoutPoolDetailsInput = {
    id?: string
    token: string
    token_account: string
    amount: number
  }

  export type TokenInfoCreateOrConnectWithoutPoolDetailsInput = {
    where: TokenInfoWhereUniqueInput
    create: XOR<TokenInfoCreateWithoutPoolDetailsInput, TokenInfoUncheckedCreateWithoutPoolDetailsInput>
  }

  export type TokenInfoCreateManyPoolDetailsInputEnvelope = {
    data: TokenInfoCreateManyPoolDetailsInput | TokenInfoCreateManyPoolDetailsInput[]
    skipDuplicates?: boolean
  }

  export type PoolInfoCreateWithoutDetailsInput = {
    id?: string
    volume_24h: number
    pool_address: string
    program_id: string
    token1?: string | null
    token1_account?: string | null
    token2?: string | null
    token2_account?: string | null
    total_volume_24h?: number | null
    total_trade_24h?: number | null
    created_time?: bigint | number | null
    metrics?: PoolMetricsCreateNestedManyWithoutPoolInfoInput
  }

  export type PoolInfoUncheckedCreateWithoutDetailsInput = {
    id?: string
    volume_24h: number
    pool_address: string
    program_id: string
    token1?: string | null
    token1_account?: string | null
    token2?: string | null
    token2_account?: string | null
    total_volume_24h?: number | null
    total_trade_24h?: number | null
    created_time?: bigint | number | null
    metrics?: PoolMetricsUncheckedCreateNestedManyWithoutPoolInfoInput
  }

  export type PoolInfoCreateOrConnectWithoutDetailsInput = {
    where: PoolInfoWhereUniqueInput
    create: XOR<PoolInfoCreateWithoutDetailsInput, PoolInfoUncheckedCreateWithoutDetailsInput>
  }

  export type TokenInfoUpsertWithWhereUniqueWithoutPoolDetailsInput = {
    where: TokenInfoWhereUniqueInput
    update: XOR<TokenInfoUpdateWithoutPoolDetailsInput, TokenInfoUncheckedUpdateWithoutPoolDetailsInput>
    create: XOR<TokenInfoCreateWithoutPoolDetailsInput, TokenInfoUncheckedCreateWithoutPoolDetailsInput>
  }

  export type TokenInfoUpdateWithWhereUniqueWithoutPoolDetailsInput = {
    where: TokenInfoWhereUniqueInput
    data: XOR<TokenInfoUpdateWithoutPoolDetailsInput, TokenInfoUncheckedUpdateWithoutPoolDetailsInput>
  }

  export type TokenInfoUpdateManyWithWhereWithoutPoolDetailsInput = {
    where: TokenInfoScalarWhereInput
    data: XOR<TokenInfoUpdateManyMutationInput, TokenInfoUncheckedUpdateManyWithoutPoolDetailsInput>
  }

  export type TokenInfoScalarWhereInput = {
    AND?: TokenInfoScalarWhereInput | TokenInfoScalarWhereInput[]
    OR?: TokenInfoScalarWhereInput[]
    NOT?: TokenInfoScalarWhereInput | TokenInfoScalarWhereInput[]
    id?: StringFilter<"TokenInfo"> | string
    token?: StringFilter<"TokenInfo"> | string
    token_account?: StringFilter<"TokenInfo"> | string
    amount?: FloatFilter<"TokenInfo"> | number
    poolDetailsId?: StringFilter<"TokenInfo"> | string
  }

  export type PoolInfoUpsertWithoutDetailsInput = {
    update: XOR<PoolInfoUpdateWithoutDetailsInput, PoolInfoUncheckedUpdateWithoutDetailsInput>
    create: XOR<PoolInfoCreateWithoutDetailsInput, PoolInfoUncheckedCreateWithoutDetailsInput>
    where?: PoolInfoWhereInput
  }

  export type PoolInfoUpdateToOneWithWhereWithoutDetailsInput = {
    where?: PoolInfoWhereInput
    data: XOR<PoolInfoUpdateWithoutDetailsInput, PoolInfoUncheckedUpdateWithoutDetailsInput>
  }

  export type PoolInfoUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume_24h?: FloatFieldUpdateOperationsInput | number
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    token1?: NullableStringFieldUpdateOperationsInput | string | null
    token1_account?: NullableStringFieldUpdateOperationsInput | string | null
    token2?: NullableStringFieldUpdateOperationsInput | string | null
    token2_account?: NullableStringFieldUpdateOperationsInput | string | null
    total_volume_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    total_trade_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    created_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    metrics?: PoolMetricsUpdateManyWithoutPoolInfoNestedInput
  }

  export type PoolInfoUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume_24h?: FloatFieldUpdateOperationsInput | number
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    token1?: NullableStringFieldUpdateOperationsInput | string | null
    token1_account?: NullableStringFieldUpdateOperationsInput | string | null
    token2?: NullableStringFieldUpdateOperationsInput | string | null
    token2_account?: NullableStringFieldUpdateOperationsInput | string | null
    total_volume_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    total_trade_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    created_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    metrics?: PoolMetricsUncheckedUpdateManyWithoutPoolInfoNestedInput
  }

  export type PoolDetailsCreateWithoutTokens_infoInput = {
    id?: string
    program_id: string
    create_tx_hash: string
    create_block_time: bigint | number
    creator: string
    lp_token: string
    pool: PoolInfoCreateNestedOneWithoutDetailsInput
  }

  export type PoolDetailsUncheckedCreateWithoutTokens_infoInput = {
    id?: string
    pool_address: string
    program_id: string
    create_tx_hash: string
    create_block_time: bigint | number
    creator: string
    lp_token: string
  }

  export type PoolDetailsCreateOrConnectWithoutTokens_infoInput = {
    where: PoolDetailsWhereUniqueInput
    create: XOR<PoolDetailsCreateWithoutTokens_infoInput, PoolDetailsUncheckedCreateWithoutTokens_infoInput>
  }

  export type PoolDetailsUpsertWithoutTokens_infoInput = {
    update: XOR<PoolDetailsUpdateWithoutTokens_infoInput, PoolDetailsUncheckedUpdateWithoutTokens_infoInput>
    create: XOR<PoolDetailsCreateWithoutTokens_infoInput, PoolDetailsUncheckedCreateWithoutTokens_infoInput>
    where?: PoolDetailsWhereInput
  }

  export type PoolDetailsUpdateToOneWithWhereWithoutTokens_infoInput = {
    where?: PoolDetailsWhereInput
    data: XOR<PoolDetailsUpdateWithoutTokens_infoInput, PoolDetailsUncheckedUpdateWithoutTokens_infoInput>
  }

  export type PoolDetailsUpdateWithoutTokens_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    create_tx_hash?: StringFieldUpdateOperationsInput | string
    create_block_time?: BigIntFieldUpdateOperationsInput | bigint | number
    creator?: StringFieldUpdateOperationsInput | string
    lp_token?: StringFieldUpdateOperationsInput | string
    pool?: PoolInfoUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type PoolDetailsUncheckedUpdateWithoutTokens_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    create_tx_hash?: StringFieldUpdateOperationsInput | string
    create_block_time?: BigIntFieldUpdateOperationsInput | bigint | number
    creator?: StringFieldUpdateOperationsInput | string
    lp_token?: StringFieldUpdateOperationsInput | string
  }

  export type PoolInfoCreateWithoutMetricsInput = {
    id?: string
    volume_24h: number
    pool_address: string
    program_id: string
    token1?: string | null
    token1_account?: string | null
    token2?: string | null
    token2_account?: string | null
    total_volume_24h?: number | null
    total_trade_24h?: number | null
    created_time?: bigint | number | null
    details?: PoolDetailsCreateNestedOneWithoutPoolInput
  }

  export type PoolInfoUncheckedCreateWithoutMetricsInput = {
    id?: string
    volume_24h: number
    pool_address: string
    program_id: string
    token1?: string | null
    token1_account?: string | null
    token2?: string | null
    token2_account?: string | null
    total_volume_24h?: number | null
    total_trade_24h?: number | null
    created_time?: bigint | number | null
    details?: PoolDetailsUncheckedCreateNestedOneWithoutPoolInput
  }

  export type PoolInfoCreateOrConnectWithoutMetricsInput = {
    where: PoolInfoWhereUniqueInput
    create: XOR<PoolInfoCreateWithoutMetricsInput, PoolInfoUncheckedCreateWithoutMetricsInput>
  }

  export type MetricDayCreateWithoutPoolMetricsInput = {
    id?: string
    day: number
    value: number
  }

  export type MetricDayUncheckedCreateWithoutPoolMetricsInput = {
    id?: string
    day: number
    value: number
  }

  export type MetricDayCreateOrConnectWithoutPoolMetricsInput = {
    where: MetricDayWhereUniqueInput
    create: XOR<MetricDayCreateWithoutPoolMetricsInput, MetricDayUncheckedCreateWithoutPoolMetricsInput>
  }

  export type MetricDayCreateManyPoolMetricsInputEnvelope = {
    data: MetricDayCreateManyPoolMetricsInput | MetricDayCreateManyPoolMetricsInput[]
    skipDuplicates?: boolean
  }

  export type PoolInfoUpsertWithoutMetricsInput = {
    update: XOR<PoolInfoUpdateWithoutMetricsInput, PoolInfoUncheckedUpdateWithoutMetricsInput>
    create: XOR<PoolInfoCreateWithoutMetricsInput, PoolInfoUncheckedCreateWithoutMetricsInput>
    where?: PoolInfoWhereInput
  }

  export type PoolInfoUpdateToOneWithWhereWithoutMetricsInput = {
    where?: PoolInfoWhereInput
    data: XOR<PoolInfoUpdateWithoutMetricsInput, PoolInfoUncheckedUpdateWithoutMetricsInput>
  }

  export type PoolInfoUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume_24h?: FloatFieldUpdateOperationsInput | number
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    token1?: NullableStringFieldUpdateOperationsInput | string | null
    token1_account?: NullableStringFieldUpdateOperationsInput | string | null
    token2?: NullableStringFieldUpdateOperationsInput | string | null
    token2_account?: NullableStringFieldUpdateOperationsInput | string | null
    total_volume_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    total_trade_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    created_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    details?: PoolDetailsUpdateOneWithoutPoolNestedInput
  }

  export type PoolInfoUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    volume_24h?: FloatFieldUpdateOperationsInput | number
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    token1?: NullableStringFieldUpdateOperationsInput | string | null
    token1_account?: NullableStringFieldUpdateOperationsInput | string | null
    token2?: NullableStringFieldUpdateOperationsInput | string | null
    token2_account?: NullableStringFieldUpdateOperationsInput | string | null
    total_volume_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    total_trade_24h?: NullableFloatFieldUpdateOperationsInput | number | null
    created_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    details?: PoolDetailsUncheckedUpdateOneWithoutPoolNestedInput
  }

  export type MetricDayUpsertWithWhereUniqueWithoutPoolMetricsInput = {
    where: MetricDayWhereUniqueInput
    update: XOR<MetricDayUpdateWithoutPoolMetricsInput, MetricDayUncheckedUpdateWithoutPoolMetricsInput>
    create: XOR<MetricDayCreateWithoutPoolMetricsInput, MetricDayUncheckedCreateWithoutPoolMetricsInput>
  }

  export type MetricDayUpdateWithWhereUniqueWithoutPoolMetricsInput = {
    where: MetricDayWhereUniqueInput
    data: XOR<MetricDayUpdateWithoutPoolMetricsInput, MetricDayUncheckedUpdateWithoutPoolMetricsInput>
  }

  export type MetricDayUpdateManyWithWhereWithoutPoolMetricsInput = {
    where: MetricDayScalarWhereInput
    data: XOR<MetricDayUpdateManyMutationInput, MetricDayUncheckedUpdateManyWithoutPoolMetricsInput>
  }

  export type MetricDayScalarWhereInput = {
    AND?: MetricDayScalarWhereInput | MetricDayScalarWhereInput[]
    OR?: MetricDayScalarWhereInput[]
    NOT?: MetricDayScalarWhereInput | MetricDayScalarWhereInput[]
    id?: StringFilter<"MetricDay"> | string
    day?: IntFilter<"MetricDay"> | number
    value?: FloatFilter<"MetricDay"> | number
    poolMetricsId?: StringFilter<"MetricDay"> | string
  }

  export type PoolMetricsCreateWithoutDaysInput = {
    id?: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    poolInfo?: PoolInfoCreateNestedOneWithoutMetricsInput
  }

  export type PoolMetricsUncheckedCreateWithoutDaysInput = {
    id?: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
    poolInfoId?: string | null
  }

  export type PoolMetricsCreateOrConnectWithoutDaysInput = {
    where: PoolMetricsWhereUniqueInput
    create: XOR<PoolMetricsCreateWithoutDaysInput, PoolMetricsUncheckedCreateWithoutDaysInput>
  }

  export type PoolMetricsUpsertWithoutDaysInput = {
    update: XOR<PoolMetricsUpdateWithoutDaysInput, PoolMetricsUncheckedUpdateWithoutDaysInput>
    create: XOR<PoolMetricsCreateWithoutDaysInput, PoolMetricsUncheckedCreateWithoutDaysInput>
    where?: PoolMetricsWhereInput
  }

  export type PoolMetricsUpdateToOneWithWhereWithoutDaysInput = {
    where?: PoolMetricsWhereInput
    data: XOR<PoolMetricsUpdateWithoutDaysInput, PoolMetricsUncheckedUpdateWithoutDaysInput>
  }

  export type PoolMetricsUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
    poolInfo?: PoolInfoUpdateOneWithoutMetricsNestedInput
  }

  export type PoolMetricsUncheckedUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
    poolInfoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PoolMetricsCreateManyPoolInfoInput = {
    id?: string
    pool_address: string
    program_id: string
    total_volume_24h: number
    total_volume_change_24h: number
    total_trades_24h: number
    total_trades_change_24h: number
  }

  export type PoolMetricsUpdateWithoutPoolInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
    days?: MetricDayUpdateManyWithoutPoolMetricsNestedInput
  }

  export type PoolMetricsUncheckedUpdateWithoutPoolInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
    days?: MetricDayUncheckedUpdateManyWithoutPoolMetricsNestedInput
  }

  export type PoolMetricsUncheckedUpdateManyWithoutPoolInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pool_address?: StringFieldUpdateOperationsInput | string
    program_id?: StringFieldUpdateOperationsInput | string
    total_volume_24h?: FloatFieldUpdateOperationsInput | number
    total_volume_change_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_24h?: FloatFieldUpdateOperationsInput | number
    total_trades_change_24h?: FloatFieldUpdateOperationsInput | number
  }

  export type TokenInfoCreateManyPoolDetailsInput = {
    id?: string
    token: string
    token_account: string
    amount: number
  }

  export type TokenInfoUpdateWithoutPoolDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_account?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type TokenInfoUncheckedUpdateWithoutPoolDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_account?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type TokenInfoUncheckedUpdateManyWithoutPoolDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    token_account?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricDayCreateManyPoolMetricsInput = {
    id?: string
    day: number
    value: number
  }

  export type MetricDayUpdateWithoutPoolMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricDayUncheckedUpdateWithoutPoolMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricDayUncheckedUpdateManyWithoutPoolMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}