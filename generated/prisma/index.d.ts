
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
 * Model PriceAlert
 * 
 */
export type PriceAlert = $Result.DefaultSelection<Prisma.$PriceAlertPayload>
/**
 * Model TelegramChat
 * 
 */
export type TelegramChat = $Result.DefaultSelection<Prisma.$TelegramChatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AlertType: {
  Price: 'Price',
  Volatility: 'Volatility',
  Range: 'Range'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]

}

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PriceAlerts
 * const priceAlerts = await prisma.priceAlert.findMany()
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
   * // Fetch zero or more PriceAlerts
   * const priceAlerts = await prisma.priceAlert.findMany()
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
   * `prisma.priceAlert`: Exposes CRUD operations for the **PriceAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceAlerts
    * const priceAlerts = await prisma.priceAlert.findMany()
    * ```
    */
  get priceAlert(): Prisma.PriceAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramChat`: Exposes CRUD operations for the **TelegramChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramChats
    * const telegramChats = await prisma.telegramChat.findMany()
    * ```
    */
  get telegramChat(): Prisma.TelegramChatDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    PriceAlert: 'PriceAlert',
    TelegramChat: 'TelegramChat'
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
      modelProps: "priceAlert" | "telegramChat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PriceAlert: {
        payload: Prisma.$PriceAlertPayload<ExtArgs>
        fields: Prisma.PriceAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          findFirst: {
            args: Prisma.PriceAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          findMany: {
            args: Prisma.PriceAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>[]
          }
          create: {
            args: Prisma.PriceAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          createMany: {
            args: Prisma.PriceAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>[]
          }
          delete: {
            args: Prisma.PriceAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          update: {
            args: Prisma.PriceAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          deleteMany: {
            args: Prisma.PriceAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>[]
          }
          upsert: {
            args: Prisma.PriceAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          aggregate: {
            args: Prisma.PriceAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceAlert>
          }
          groupBy: {
            args: Prisma.PriceAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceAlertCountArgs<ExtArgs>
            result: $Utils.Optional<PriceAlertCountAggregateOutputType> | number
          }
        }
      }
      TelegramChat: {
        payload: Prisma.$TelegramChatPayload<ExtArgs>
        fields: Prisma.TelegramChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          findFirst: {
            args: Prisma.TelegramChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          findMany: {
            args: Prisma.TelegramChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>[]
          }
          create: {
            args: Prisma.TelegramChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          createMany: {
            args: Prisma.TelegramChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>[]
          }
          delete: {
            args: Prisma.TelegramChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          update: {
            args: Prisma.TelegramChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          deleteMany: {
            args: Prisma.TelegramChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>[]
          }
          upsert: {
            args: Prisma.TelegramChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          aggregate: {
            args: Prisma.TelegramChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramChat>
          }
          groupBy: {
            args: Prisma.TelegramChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramChatCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramChatCountAggregateOutputType> | number
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
    priceAlert?: PriceAlertOmit
    telegramChat?: TelegramChatOmit
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
   * Count Type TelegramChatCountOutputType
   */

  export type TelegramChatCountOutputType = {
    priceAlerts: number
  }

  export type TelegramChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceAlerts?: boolean | TelegramChatCountOutputTypeCountPriceAlertsArgs
  }

  // Custom InputTypes
  /**
   * TelegramChatCountOutputType without action
   */
  export type TelegramChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChatCountOutputType
     */
    select?: TelegramChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TelegramChatCountOutputType without action
   */
  export type TelegramChatCountOutputTypeCountPriceAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PriceAlert
   */

  export type AggregatePriceAlert = {
    _count: PriceAlertCountAggregateOutputType | null
    _avg: PriceAlertAvgAggregateOutputType | null
    _sum: PriceAlertSumAggregateOutputType | null
    _min: PriceAlertMinAggregateOutputType | null
    _max: PriceAlertMaxAggregateOutputType | null
  }

  export type PriceAlertAvgAggregateOutputType = {
    threshold: number | null
    duration: number | null
    minPrice: number | null
    maxPrice: number | null
  }

  export type PriceAlertSumAggregateOutputType = {
    threshold: number | null
    duration: number | null
    minPrice: number | null
    maxPrice: number | null
  }

  export type PriceAlertMinAggregateOutputType = {
    id: string | null
    type: $Enums.AlertType | null
    threshold: number | null
    duration: number | null
    minPrice: number | null
    maxPrice: number | null
    createdAt: Date | null
    userId: string | null
    chatId: string | null
  }

  export type PriceAlertMaxAggregateOutputType = {
    id: string | null
    type: $Enums.AlertType | null
    threshold: number | null
    duration: number | null
    minPrice: number | null
    maxPrice: number | null
    createdAt: Date | null
    userId: string | null
    chatId: string | null
  }

  export type PriceAlertCountAggregateOutputType = {
    id: number
    type: number
    threshold: number
    duration: number
    minPrice: number
    maxPrice: number
    createdAt: number
    userId: number
    chatId: number
    _all: number
  }


  export type PriceAlertAvgAggregateInputType = {
    threshold?: true
    duration?: true
    minPrice?: true
    maxPrice?: true
  }

  export type PriceAlertSumAggregateInputType = {
    threshold?: true
    duration?: true
    minPrice?: true
    maxPrice?: true
  }

  export type PriceAlertMinAggregateInputType = {
    id?: true
    type?: true
    threshold?: true
    duration?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    userId?: true
    chatId?: true
  }

  export type PriceAlertMaxAggregateInputType = {
    id?: true
    type?: true
    threshold?: true
    duration?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    userId?: true
    chatId?: true
  }

  export type PriceAlertCountAggregateInputType = {
    id?: true
    type?: true
    threshold?: true
    duration?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    userId?: true
    chatId?: true
    _all?: true
  }

  export type PriceAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAlert to aggregate.
     */
    where?: PriceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceAlerts
    **/
    _count?: true | PriceAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceAlertMaxAggregateInputType
  }

  export type GetPriceAlertAggregateType<T extends PriceAlertAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceAlert[P]>
      : GetScalarType<T[P], AggregatePriceAlert[P]>
  }




  export type PriceAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAlertWhereInput
    orderBy?: PriceAlertOrderByWithAggregationInput | PriceAlertOrderByWithAggregationInput[]
    by: PriceAlertScalarFieldEnum[] | PriceAlertScalarFieldEnum
    having?: PriceAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceAlertCountAggregateInputType | true
    _avg?: PriceAlertAvgAggregateInputType
    _sum?: PriceAlertSumAggregateInputType
    _min?: PriceAlertMinAggregateInputType
    _max?: PriceAlertMaxAggregateInputType
  }

  export type PriceAlertGroupByOutputType = {
    id: string
    type: $Enums.AlertType
    threshold: number | null
    duration: number | null
    minPrice: number | null
    maxPrice: number | null
    createdAt: Date
    userId: string
    chatId: string | null
    _count: PriceAlertCountAggregateOutputType | null
    _avg: PriceAlertAvgAggregateOutputType | null
    _sum: PriceAlertSumAggregateOutputType | null
    _min: PriceAlertMinAggregateOutputType | null
    _max: PriceAlertMaxAggregateOutputType | null
  }

  type GetPriceAlertGroupByPayload<T extends PriceAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceAlertGroupByOutputType[P]>
            : GetScalarType<T[P], PriceAlertGroupByOutputType[P]>
        }
      >
    >


  export type PriceAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    threshold?: boolean
    duration?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    userId?: boolean
    chatId?: boolean
    telegramChat?: boolean | PriceAlert$telegramChatArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlert"]>

  export type PriceAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    threshold?: boolean
    duration?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    userId?: boolean
    chatId?: boolean
    telegramChat?: boolean | PriceAlert$telegramChatArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlert"]>

  export type PriceAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    threshold?: boolean
    duration?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    userId?: boolean
    chatId?: boolean
    telegramChat?: boolean | PriceAlert$telegramChatArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlert"]>

  export type PriceAlertSelectScalar = {
    id?: boolean
    type?: boolean
    threshold?: boolean
    duration?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    userId?: boolean
    chatId?: boolean
  }

  export type PriceAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "threshold" | "duration" | "minPrice" | "maxPrice" | "createdAt" | "userId" | "chatId", ExtArgs["result"]["priceAlert"]>
  export type PriceAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telegramChat?: boolean | PriceAlert$telegramChatArgs<ExtArgs>
  }
  export type PriceAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telegramChat?: boolean | PriceAlert$telegramChatArgs<ExtArgs>
  }
  export type PriceAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telegramChat?: boolean | PriceAlert$telegramChatArgs<ExtArgs>
  }

  export type $PriceAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceAlert"
    objects: {
      telegramChat: Prisma.$TelegramChatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.AlertType
      threshold: number | null
      duration: number | null
      minPrice: number | null
      maxPrice: number | null
      createdAt: Date
      userId: string
      chatId: string | null
    }, ExtArgs["result"]["priceAlert"]>
    composites: {}
  }

  type PriceAlertGetPayload<S extends boolean | null | undefined | PriceAlertDefaultArgs> = $Result.GetResult<Prisma.$PriceAlertPayload, S>

  type PriceAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceAlertCountAggregateInputType | true
    }

  export interface PriceAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceAlert'], meta: { name: 'PriceAlert' } }
    /**
     * Find zero or one PriceAlert that matches the filter.
     * @param {PriceAlertFindUniqueArgs} args - Arguments to find a PriceAlert
     * @example
     * // Get one PriceAlert
     * const priceAlert = await prisma.priceAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceAlertFindUniqueArgs>(args: SelectSubset<T, PriceAlertFindUniqueArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceAlertFindUniqueOrThrowArgs} args - Arguments to find a PriceAlert
     * @example
     * // Get one PriceAlert
     * const priceAlert = await prisma.priceAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertFindFirstArgs} args - Arguments to find a PriceAlert
     * @example
     * // Get one PriceAlert
     * const priceAlert = await prisma.priceAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceAlertFindFirstArgs>(args?: SelectSubset<T, PriceAlertFindFirstArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertFindFirstOrThrowArgs} args - Arguments to find a PriceAlert
     * @example
     * // Get one PriceAlert
     * const priceAlert = await prisma.priceAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceAlerts
     * const priceAlerts = await prisma.priceAlert.findMany()
     * 
     * // Get first 10 PriceAlerts
     * const priceAlerts = await prisma.priceAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceAlertWithIdOnly = await prisma.priceAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceAlertFindManyArgs>(args?: SelectSubset<T, PriceAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceAlert.
     * @param {PriceAlertCreateArgs} args - Arguments to create a PriceAlert.
     * @example
     * // Create one PriceAlert
     * const PriceAlert = await prisma.priceAlert.create({
     *   data: {
     *     // ... data to create a PriceAlert
     *   }
     * })
     * 
     */
    create<T extends PriceAlertCreateArgs>(args: SelectSubset<T, PriceAlertCreateArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceAlerts.
     * @param {PriceAlertCreateManyArgs} args - Arguments to create many PriceAlerts.
     * @example
     * // Create many PriceAlerts
     * const priceAlert = await prisma.priceAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceAlertCreateManyArgs>(args?: SelectSubset<T, PriceAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceAlerts and returns the data saved in the database.
     * @param {PriceAlertCreateManyAndReturnArgs} args - Arguments to create many PriceAlerts.
     * @example
     * // Create many PriceAlerts
     * const priceAlert = await prisma.priceAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceAlerts and only return the `id`
     * const priceAlertWithIdOnly = await prisma.priceAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceAlert.
     * @param {PriceAlertDeleteArgs} args - Arguments to delete one PriceAlert.
     * @example
     * // Delete one PriceAlert
     * const PriceAlert = await prisma.priceAlert.delete({
     *   where: {
     *     // ... filter to delete one PriceAlert
     *   }
     * })
     * 
     */
    delete<T extends PriceAlertDeleteArgs>(args: SelectSubset<T, PriceAlertDeleteArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceAlert.
     * @param {PriceAlertUpdateArgs} args - Arguments to update one PriceAlert.
     * @example
     * // Update one PriceAlert
     * const priceAlert = await prisma.priceAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceAlertUpdateArgs>(args: SelectSubset<T, PriceAlertUpdateArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceAlerts.
     * @param {PriceAlertDeleteManyArgs} args - Arguments to filter PriceAlerts to delete.
     * @example
     * // Delete a few PriceAlerts
     * const { count } = await prisma.priceAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceAlertDeleteManyArgs>(args?: SelectSubset<T, PriceAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceAlerts
     * const priceAlert = await prisma.priceAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceAlertUpdateManyArgs>(args: SelectSubset<T, PriceAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAlerts and returns the data updated in the database.
     * @param {PriceAlertUpdateManyAndReturnArgs} args - Arguments to update many PriceAlerts.
     * @example
     * // Update many PriceAlerts
     * const priceAlert = await prisma.priceAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceAlerts and only return the `id`
     * const priceAlertWithIdOnly = await prisma.priceAlert.updateManyAndReturn({
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
    updateManyAndReturn<T extends PriceAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceAlert.
     * @param {PriceAlertUpsertArgs} args - Arguments to update or create a PriceAlert.
     * @example
     * // Update or create a PriceAlert
     * const priceAlert = await prisma.priceAlert.upsert({
     *   create: {
     *     // ... data to create a PriceAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceAlert we want to update
     *   }
     * })
     */
    upsert<T extends PriceAlertUpsertArgs>(args: SelectSubset<T, PriceAlertUpsertArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertCountArgs} args - Arguments to filter PriceAlerts to count.
     * @example
     * // Count the number of PriceAlerts
     * const count = await prisma.priceAlert.count({
     *   where: {
     *     // ... the filter for the PriceAlerts we want to count
     *   }
     * })
    **/
    count<T extends PriceAlertCountArgs>(
      args?: Subset<T, PriceAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceAlertAggregateArgs>(args: Subset<T, PriceAlertAggregateArgs>): Prisma.PrismaPromise<GetPriceAlertAggregateType<T>>

    /**
     * Group by PriceAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertGroupByArgs} args - Group by arguments.
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
      T extends PriceAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceAlertGroupByArgs['orderBy'] }
        : { orderBy?: PriceAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceAlert model
   */
  readonly fields: PriceAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telegramChat<T extends PriceAlert$telegramChatArgs<ExtArgs> = {}>(args?: Subset<T, PriceAlert$telegramChatArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PriceAlert model
   */
  interface PriceAlertFieldRefs {
    readonly id: FieldRef<"PriceAlert", 'String'>
    readonly type: FieldRef<"PriceAlert", 'AlertType'>
    readonly threshold: FieldRef<"PriceAlert", 'Float'>
    readonly duration: FieldRef<"PriceAlert", 'Int'>
    readonly minPrice: FieldRef<"PriceAlert", 'Float'>
    readonly maxPrice: FieldRef<"PriceAlert", 'Float'>
    readonly createdAt: FieldRef<"PriceAlert", 'DateTime'>
    readonly userId: FieldRef<"PriceAlert", 'String'>
    readonly chatId: FieldRef<"PriceAlert", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PriceAlert findUnique
   */
  export type PriceAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlert to fetch.
     */
    where: PriceAlertWhereUniqueInput
  }

  /**
   * PriceAlert findUniqueOrThrow
   */
  export type PriceAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlert to fetch.
     */
    where: PriceAlertWhereUniqueInput
  }

  /**
   * PriceAlert findFirst
   */
  export type PriceAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlert to fetch.
     */
    where?: PriceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAlerts.
     */
    cursor?: PriceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAlerts.
     */
    distinct?: PriceAlertScalarFieldEnum | PriceAlertScalarFieldEnum[]
  }

  /**
   * PriceAlert findFirstOrThrow
   */
  export type PriceAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlert to fetch.
     */
    where?: PriceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAlerts.
     */
    cursor?: PriceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAlerts.
     */
    distinct?: PriceAlertScalarFieldEnum | PriceAlertScalarFieldEnum[]
  }

  /**
   * PriceAlert findMany
   */
  export type PriceAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlerts to fetch.
     */
    where?: PriceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceAlerts.
     */
    cursor?: PriceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    distinct?: PriceAlertScalarFieldEnum | PriceAlertScalarFieldEnum[]
  }

  /**
   * PriceAlert create
   */
  export type PriceAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceAlert.
     */
    data: XOR<PriceAlertCreateInput, PriceAlertUncheckedCreateInput>
  }

  /**
   * PriceAlert createMany
   */
  export type PriceAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceAlerts.
     */
    data: PriceAlertCreateManyInput | PriceAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceAlert createManyAndReturn
   */
  export type PriceAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * The data used to create many PriceAlerts.
     */
    data: PriceAlertCreateManyInput | PriceAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceAlert update
   */
  export type PriceAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceAlert.
     */
    data: XOR<PriceAlertUpdateInput, PriceAlertUncheckedUpdateInput>
    /**
     * Choose, which PriceAlert to update.
     */
    where: PriceAlertWhereUniqueInput
  }

  /**
   * PriceAlert updateMany
   */
  export type PriceAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceAlerts.
     */
    data: XOR<PriceAlertUpdateManyMutationInput, PriceAlertUncheckedUpdateManyInput>
    /**
     * Filter which PriceAlerts to update
     */
    where?: PriceAlertWhereInput
    /**
     * Limit how many PriceAlerts to update.
     */
    limit?: number
  }

  /**
   * PriceAlert updateManyAndReturn
   */
  export type PriceAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * The data used to update PriceAlerts.
     */
    data: XOR<PriceAlertUpdateManyMutationInput, PriceAlertUncheckedUpdateManyInput>
    /**
     * Filter which PriceAlerts to update
     */
    where?: PriceAlertWhereInput
    /**
     * Limit how many PriceAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceAlert upsert
   */
  export type PriceAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceAlert to update in case it exists.
     */
    where: PriceAlertWhereUniqueInput
    /**
     * In case the PriceAlert found by the `where` argument doesn't exist, create a new PriceAlert with this data.
     */
    create: XOR<PriceAlertCreateInput, PriceAlertUncheckedCreateInput>
    /**
     * In case the PriceAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceAlertUpdateInput, PriceAlertUncheckedUpdateInput>
  }

  /**
   * PriceAlert delete
   */
  export type PriceAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter which PriceAlert to delete.
     */
    where: PriceAlertWhereUniqueInput
  }

  /**
   * PriceAlert deleteMany
   */
  export type PriceAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAlerts to delete
     */
    where?: PriceAlertWhereInput
    /**
     * Limit how many PriceAlerts to delete.
     */
    limit?: number
  }

  /**
   * PriceAlert.telegramChat
   */
  export type PriceAlert$telegramChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    where?: TelegramChatWhereInput
  }

  /**
   * PriceAlert without action
   */
  export type PriceAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
  }


  /**
   * Model TelegramChat
   */

  export type AggregateTelegramChat = {
    _count: TelegramChatCountAggregateOutputType | null
    _avg: TelegramChatAvgAggregateOutputType | null
    _sum: TelegramChatSumAggregateOutputType | null
    _min: TelegramChatMinAggregateOutputType | null
    _max: TelegramChatMaxAggregateOutputType | null
  }

  export type TelegramChatAvgAggregateOutputType = {
    id: number | null
  }

  export type TelegramChatSumAggregateOutputType = {
    id: number | null
  }

  export type TelegramChatMinAggregateOutputType = {
    id: number | null
    userId: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramChatMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramChatCountAggregateOutputType = {
    id: number
    userId: number
    chatId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TelegramChatAvgAggregateInputType = {
    id?: true
  }

  export type TelegramChatSumAggregateInputType = {
    id?: true
  }

  export type TelegramChatMinAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramChatMaxAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramChatCountAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TelegramChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramChat to aggregate.
     */
    where?: TelegramChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramChats to fetch.
     */
    orderBy?: TelegramChatOrderByWithRelationInput | TelegramChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramChats
    **/
    _count?: true | TelegramChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelegramChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelegramChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramChatMaxAggregateInputType
  }

  export type GetTelegramChatAggregateType<T extends TelegramChatAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramChat[P]>
      : GetScalarType<T[P], AggregateTelegramChat[P]>
  }




  export type TelegramChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramChatWhereInput
    orderBy?: TelegramChatOrderByWithAggregationInput | TelegramChatOrderByWithAggregationInput[]
    by: TelegramChatScalarFieldEnum[] | TelegramChatScalarFieldEnum
    having?: TelegramChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramChatCountAggregateInputType | true
    _avg?: TelegramChatAvgAggregateInputType
    _sum?: TelegramChatSumAggregateInputType
    _min?: TelegramChatMinAggregateInputType
    _max?: TelegramChatMaxAggregateInputType
  }

  export type TelegramChatGroupByOutputType = {
    id: number
    userId: string
    chatId: string
    createdAt: Date
    updatedAt: Date
    _count: TelegramChatCountAggregateOutputType | null
    _avg: TelegramChatAvgAggregateOutputType | null
    _sum: TelegramChatSumAggregateOutputType | null
    _min: TelegramChatMinAggregateOutputType | null
    _max: TelegramChatMaxAggregateOutputType | null
  }

  type GetTelegramChatGroupByPayload<T extends TelegramChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramChatGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramChatGroupByOutputType[P]>
        }
      >
    >


  export type TelegramChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    priceAlerts?: boolean | TelegramChat$priceAlertsArgs<ExtArgs>
    _count?: boolean | TelegramChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramChat"]>

  export type TelegramChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["telegramChat"]>

  export type TelegramChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["telegramChat"]>

  export type TelegramChatSelectScalar = {
    id?: boolean
    userId?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TelegramChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatId" | "createdAt" | "updatedAt", ExtArgs["result"]["telegramChat"]>
  export type TelegramChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceAlerts?: boolean | TelegramChat$priceAlertsArgs<ExtArgs>
    _count?: boolean | TelegramChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TelegramChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TelegramChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TelegramChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramChat"
    objects: {
      priceAlerts: Prisma.$PriceAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      chatId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["telegramChat"]>
    composites: {}
  }

  type TelegramChatGetPayload<S extends boolean | null | undefined | TelegramChatDefaultArgs> = $Result.GetResult<Prisma.$TelegramChatPayload, S>

  type TelegramChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramChatCountAggregateInputType | true
    }

  export interface TelegramChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramChat'], meta: { name: 'TelegramChat' } }
    /**
     * Find zero or one TelegramChat that matches the filter.
     * @param {TelegramChatFindUniqueArgs} args - Arguments to find a TelegramChat
     * @example
     * // Get one TelegramChat
     * const telegramChat = await prisma.telegramChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramChatFindUniqueArgs>(args: SelectSubset<T, TelegramChatFindUniqueArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramChatFindUniqueOrThrowArgs} args - Arguments to find a TelegramChat
     * @example
     * // Get one TelegramChat
     * const telegramChat = await prisma.telegramChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramChatFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatFindFirstArgs} args - Arguments to find a TelegramChat
     * @example
     * // Get one TelegramChat
     * const telegramChat = await prisma.telegramChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramChatFindFirstArgs>(args?: SelectSubset<T, TelegramChatFindFirstArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatFindFirstOrThrowArgs} args - Arguments to find a TelegramChat
     * @example
     * // Get one TelegramChat
     * const telegramChat = await prisma.telegramChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramChatFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramChats
     * const telegramChats = await prisma.telegramChat.findMany()
     * 
     * // Get first 10 TelegramChats
     * const telegramChats = await prisma.telegramChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramChatWithIdOnly = await prisma.telegramChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramChatFindManyArgs>(args?: SelectSubset<T, TelegramChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramChat.
     * @param {TelegramChatCreateArgs} args - Arguments to create a TelegramChat.
     * @example
     * // Create one TelegramChat
     * const TelegramChat = await prisma.telegramChat.create({
     *   data: {
     *     // ... data to create a TelegramChat
     *   }
     * })
     * 
     */
    create<T extends TelegramChatCreateArgs>(args: SelectSubset<T, TelegramChatCreateArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramChats.
     * @param {TelegramChatCreateManyArgs} args - Arguments to create many TelegramChats.
     * @example
     * // Create many TelegramChats
     * const telegramChat = await prisma.telegramChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramChatCreateManyArgs>(args?: SelectSubset<T, TelegramChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramChats and returns the data saved in the database.
     * @param {TelegramChatCreateManyAndReturnArgs} args - Arguments to create many TelegramChats.
     * @example
     * // Create many TelegramChats
     * const telegramChat = await prisma.telegramChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramChats and only return the `id`
     * const telegramChatWithIdOnly = await prisma.telegramChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramChatCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramChat.
     * @param {TelegramChatDeleteArgs} args - Arguments to delete one TelegramChat.
     * @example
     * // Delete one TelegramChat
     * const TelegramChat = await prisma.telegramChat.delete({
     *   where: {
     *     // ... filter to delete one TelegramChat
     *   }
     * })
     * 
     */
    delete<T extends TelegramChatDeleteArgs>(args: SelectSubset<T, TelegramChatDeleteArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramChat.
     * @param {TelegramChatUpdateArgs} args - Arguments to update one TelegramChat.
     * @example
     * // Update one TelegramChat
     * const telegramChat = await prisma.telegramChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramChatUpdateArgs>(args: SelectSubset<T, TelegramChatUpdateArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramChats.
     * @param {TelegramChatDeleteManyArgs} args - Arguments to filter TelegramChats to delete.
     * @example
     * // Delete a few TelegramChats
     * const { count } = await prisma.telegramChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramChatDeleteManyArgs>(args?: SelectSubset<T, TelegramChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramChats
     * const telegramChat = await prisma.telegramChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramChatUpdateManyArgs>(args: SelectSubset<T, TelegramChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramChats and returns the data updated in the database.
     * @param {TelegramChatUpdateManyAndReturnArgs} args - Arguments to update many TelegramChats.
     * @example
     * // Update many TelegramChats
     * const telegramChat = await prisma.telegramChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramChats and only return the `id`
     * const telegramChatWithIdOnly = await prisma.telegramChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends TelegramChatUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramChat.
     * @param {TelegramChatUpsertArgs} args - Arguments to update or create a TelegramChat.
     * @example
     * // Update or create a TelegramChat
     * const telegramChat = await prisma.telegramChat.upsert({
     *   create: {
     *     // ... data to create a TelegramChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramChat we want to update
     *   }
     * })
     */
    upsert<T extends TelegramChatUpsertArgs>(args: SelectSubset<T, TelegramChatUpsertArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatCountArgs} args - Arguments to filter TelegramChats to count.
     * @example
     * // Count the number of TelegramChats
     * const count = await prisma.telegramChat.count({
     *   where: {
     *     // ... the filter for the TelegramChats we want to count
     *   }
     * })
    **/
    count<T extends TelegramChatCountArgs>(
      args?: Subset<T, TelegramChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelegramChatAggregateArgs>(args: Subset<T, TelegramChatAggregateArgs>): Prisma.PrismaPromise<GetTelegramChatAggregateType<T>>

    /**
     * Group by TelegramChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatGroupByArgs} args - Group by arguments.
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
      T extends TelegramChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramChatGroupByArgs['orderBy'] }
        : { orderBy?: TelegramChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelegramChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramChat model
   */
  readonly fields: TelegramChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    priceAlerts<T extends TelegramChat$priceAlertsArgs<ExtArgs> = {}>(args?: Subset<T, TelegramChat$priceAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TelegramChat model
   */
  interface TelegramChatFieldRefs {
    readonly id: FieldRef<"TelegramChat", 'Int'>
    readonly userId: FieldRef<"TelegramChat", 'String'>
    readonly chatId: FieldRef<"TelegramChat", 'String'>
    readonly createdAt: FieldRef<"TelegramChat", 'DateTime'>
    readonly updatedAt: FieldRef<"TelegramChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramChat findUnique
   */
  export type TelegramChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * Filter, which TelegramChat to fetch.
     */
    where: TelegramChatWhereUniqueInput
  }

  /**
   * TelegramChat findUniqueOrThrow
   */
  export type TelegramChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * Filter, which TelegramChat to fetch.
     */
    where: TelegramChatWhereUniqueInput
  }

  /**
   * TelegramChat findFirst
   */
  export type TelegramChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * Filter, which TelegramChat to fetch.
     */
    where?: TelegramChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramChats to fetch.
     */
    orderBy?: TelegramChatOrderByWithRelationInput | TelegramChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramChats.
     */
    cursor?: TelegramChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramChats.
     */
    distinct?: TelegramChatScalarFieldEnum | TelegramChatScalarFieldEnum[]
  }

  /**
   * TelegramChat findFirstOrThrow
   */
  export type TelegramChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * Filter, which TelegramChat to fetch.
     */
    where?: TelegramChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramChats to fetch.
     */
    orderBy?: TelegramChatOrderByWithRelationInput | TelegramChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramChats.
     */
    cursor?: TelegramChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramChats.
     */
    distinct?: TelegramChatScalarFieldEnum | TelegramChatScalarFieldEnum[]
  }

  /**
   * TelegramChat findMany
   */
  export type TelegramChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * Filter, which TelegramChats to fetch.
     */
    where?: TelegramChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramChats to fetch.
     */
    orderBy?: TelegramChatOrderByWithRelationInput | TelegramChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramChats.
     */
    cursor?: TelegramChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramChats.
     */
    skip?: number
    distinct?: TelegramChatScalarFieldEnum | TelegramChatScalarFieldEnum[]
  }

  /**
   * TelegramChat create
   */
  export type TelegramChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * The data needed to create a TelegramChat.
     */
    data: XOR<TelegramChatCreateInput, TelegramChatUncheckedCreateInput>
  }

  /**
   * TelegramChat createMany
   */
  export type TelegramChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramChats.
     */
    data: TelegramChatCreateManyInput | TelegramChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramChat createManyAndReturn
   */
  export type TelegramChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramChats.
     */
    data: TelegramChatCreateManyInput | TelegramChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramChat update
   */
  export type TelegramChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * The data needed to update a TelegramChat.
     */
    data: XOR<TelegramChatUpdateInput, TelegramChatUncheckedUpdateInput>
    /**
     * Choose, which TelegramChat to update.
     */
    where: TelegramChatWhereUniqueInput
  }

  /**
   * TelegramChat updateMany
   */
  export type TelegramChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramChats.
     */
    data: XOR<TelegramChatUpdateManyMutationInput, TelegramChatUncheckedUpdateManyInput>
    /**
     * Filter which TelegramChats to update
     */
    where?: TelegramChatWhereInput
    /**
     * Limit how many TelegramChats to update.
     */
    limit?: number
  }

  /**
   * TelegramChat updateManyAndReturn
   */
  export type TelegramChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * The data used to update TelegramChats.
     */
    data: XOR<TelegramChatUpdateManyMutationInput, TelegramChatUncheckedUpdateManyInput>
    /**
     * Filter which TelegramChats to update
     */
    where?: TelegramChatWhereInput
    /**
     * Limit how many TelegramChats to update.
     */
    limit?: number
  }

  /**
   * TelegramChat upsert
   */
  export type TelegramChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * The filter to search for the TelegramChat to update in case it exists.
     */
    where: TelegramChatWhereUniqueInput
    /**
     * In case the TelegramChat found by the `where` argument doesn't exist, create a new TelegramChat with this data.
     */
    create: XOR<TelegramChatCreateInput, TelegramChatUncheckedCreateInput>
    /**
     * In case the TelegramChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramChatUpdateInput, TelegramChatUncheckedUpdateInput>
  }

  /**
   * TelegramChat delete
   */
  export type TelegramChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
    /**
     * Filter which TelegramChat to delete.
     */
    where: TelegramChatWhereUniqueInput
  }

  /**
   * TelegramChat deleteMany
   */
  export type TelegramChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramChats to delete
     */
    where?: TelegramChatWhereInput
    /**
     * Limit how many TelegramChats to delete.
     */
    limit?: number
  }

  /**
   * TelegramChat.priceAlerts
   */
  export type TelegramChat$priceAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    where?: PriceAlertWhereInput
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    cursor?: PriceAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceAlertScalarFieldEnum | PriceAlertScalarFieldEnum[]
  }

  /**
   * TelegramChat without action
   */
  export type TelegramChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramChatInclude<ExtArgs> | null
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


  export const PriceAlertScalarFieldEnum: {
    id: 'id',
    type: 'type',
    threshold: 'threshold',
    duration: 'duration',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    createdAt: 'createdAt',
    userId: 'userId',
    chatId: 'chatId'
  };

  export type PriceAlertScalarFieldEnum = (typeof PriceAlertScalarFieldEnum)[keyof typeof PriceAlertScalarFieldEnum]


  export const TelegramChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatId: 'chatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TelegramChatScalarFieldEnum = (typeof TelegramChatScalarFieldEnum)[keyof typeof TelegramChatScalarFieldEnum]


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
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type PriceAlertWhereInput = {
    AND?: PriceAlertWhereInput | PriceAlertWhereInput[]
    OR?: PriceAlertWhereInput[]
    NOT?: PriceAlertWhereInput | PriceAlertWhereInput[]
    id?: StringFilter<"PriceAlert"> | string
    type?: EnumAlertTypeFilter<"PriceAlert"> | $Enums.AlertType
    threshold?: FloatNullableFilter<"PriceAlert"> | number | null
    duration?: IntNullableFilter<"PriceAlert"> | number | null
    minPrice?: FloatNullableFilter<"PriceAlert"> | number | null
    maxPrice?: FloatNullableFilter<"PriceAlert"> | number | null
    createdAt?: DateTimeFilter<"PriceAlert"> | Date | string
    userId?: StringFilter<"PriceAlert"> | string
    chatId?: StringNullableFilter<"PriceAlert"> | string | null
    telegramChat?: XOR<TelegramChatNullableScalarRelationFilter, TelegramChatWhereInput> | null
  }

  export type PriceAlertOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    threshold?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    minPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrderInput | SortOrder
    telegramChat?: TelegramChatOrderByWithRelationInput
  }

  export type PriceAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceAlertWhereInput | PriceAlertWhereInput[]
    OR?: PriceAlertWhereInput[]
    NOT?: PriceAlertWhereInput | PriceAlertWhereInput[]
    type?: EnumAlertTypeFilter<"PriceAlert"> | $Enums.AlertType
    threshold?: FloatNullableFilter<"PriceAlert"> | number | null
    duration?: IntNullableFilter<"PriceAlert"> | number | null
    minPrice?: FloatNullableFilter<"PriceAlert"> | number | null
    maxPrice?: FloatNullableFilter<"PriceAlert"> | number | null
    createdAt?: DateTimeFilter<"PriceAlert"> | Date | string
    userId?: StringFilter<"PriceAlert"> | string
    chatId?: StringNullableFilter<"PriceAlert"> | string | null
    telegramChat?: XOR<TelegramChatNullableScalarRelationFilter, TelegramChatWhereInput> | null
  }, "id">

  export type PriceAlertOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    threshold?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    minPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrderInput | SortOrder
    _count?: PriceAlertCountOrderByAggregateInput
    _avg?: PriceAlertAvgOrderByAggregateInput
    _max?: PriceAlertMaxOrderByAggregateInput
    _min?: PriceAlertMinOrderByAggregateInput
    _sum?: PriceAlertSumOrderByAggregateInput
  }

  export type PriceAlertScalarWhereWithAggregatesInput = {
    AND?: PriceAlertScalarWhereWithAggregatesInput | PriceAlertScalarWhereWithAggregatesInput[]
    OR?: PriceAlertScalarWhereWithAggregatesInput[]
    NOT?: PriceAlertScalarWhereWithAggregatesInput | PriceAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceAlert"> | string
    type?: EnumAlertTypeWithAggregatesFilter<"PriceAlert"> | $Enums.AlertType
    threshold?: FloatNullableWithAggregatesFilter<"PriceAlert"> | number | null
    duration?: IntNullableWithAggregatesFilter<"PriceAlert"> | number | null
    minPrice?: FloatNullableWithAggregatesFilter<"PriceAlert"> | number | null
    maxPrice?: FloatNullableWithAggregatesFilter<"PriceAlert"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PriceAlert"> | Date | string
    userId?: StringWithAggregatesFilter<"PriceAlert"> | string
    chatId?: StringNullableWithAggregatesFilter<"PriceAlert"> | string | null
  }

  export type TelegramChatWhereInput = {
    AND?: TelegramChatWhereInput | TelegramChatWhereInput[]
    OR?: TelegramChatWhereInput[]
    NOT?: TelegramChatWhereInput | TelegramChatWhereInput[]
    id?: IntFilter<"TelegramChat"> | number
    userId?: StringFilter<"TelegramChat"> | string
    chatId?: StringFilter<"TelegramChat"> | string
    createdAt?: DateTimeFilter<"TelegramChat"> | Date | string
    updatedAt?: DateTimeFilter<"TelegramChat"> | Date | string
    priceAlerts?: PriceAlertListRelationFilter
  }

  export type TelegramChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    priceAlerts?: PriceAlertOrderByRelationAggregateInput
  }

  export type TelegramChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chatId?: string
    AND?: TelegramChatWhereInput | TelegramChatWhereInput[]
    OR?: TelegramChatWhereInput[]
    NOT?: TelegramChatWhereInput | TelegramChatWhereInput[]
    userId?: StringFilter<"TelegramChat"> | string
    createdAt?: DateTimeFilter<"TelegramChat"> | Date | string
    updatedAt?: DateTimeFilter<"TelegramChat"> | Date | string
    priceAlerts?: PriceAlertListRelationFilter
  }, "id" | "chatId">

  export type TelegramChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TelegramChatCountOrderByAggregateInput
    _avg?: TelegramChatAvgOrderByAggregateInput
    _max?: TelegramChatMaxOrderByAggregateInput
    _min?: TelegramChatMinOrderByAggregateInput
    _sum?: TelegramChatSumOrderByAggregateInput
  }

  export type TelegramChatScalarWhereWithAggregatesInput = {
    AND?: TelegramChatScalarWhereWithAggregatesInput | TelegramChatScalarWhereWithAggregatesInput[]
    OR?: TelegramChatScalarWhereWithAggregatesInput[]
    NOT?: TelegramChatScalarWhereWithAggregatesInput | TelegramChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TelegramChat"> | number
    userId?: StringWithAggregatesFilter<"TelegramChat"> | string
    chatId?: StringWithAggregatesFilter<"TelegramChat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TelegramChat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TelegramChat"> | Date | string
  }

  export type PriceAlertCreateInput = {
    id?: string
    type: $Enums.AlertType
    threshold?: number | null
    duration?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    userId: string
    telegramChat?: TelegramChatCreateNestedOneWithoutPriceAlertsInput
  }

  export type PriceAlertUncheckedCreateInput = {
    id?: string
    type: $Enums.AlertType
    threshold?: number | null
    duration?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    userId: string
    chatId?: string | null
  }

  export type PriceAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    telegramChat?: TelegramChatUpdateOneWithoutPriceAlertsNestedInput
  }

  export type PriceAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceAlertCreateManyInput = {
    id?: string
    type: $Enums.AlertType
    threshold?: number | null
    duration?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    userId: string
    chatId?: string | null
  }

  export type PriceAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TelegramChatCreateInput = {
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    priceAlerts?: PriceAlertCreateNestedManyWithoutTelegramChatInput
  }

  export type TelegramChatUncheckedCreateInput = {
    id?: number
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutTelegramChatInput
  }

  export type TelegramChatUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceAlerts?: PriceAlertUpdateManyWithoutTelegramChatNestedInput
  }

  export type TelegramChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutTelegramChatNestedInput
  }

  export type TelegramChatCreateManyInput = {
    id?: number
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramChatUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type TelegramChatNullableScalarRelationFilter = {
    is?: TelegramChatWhereInput | null
    isNot?: TelegramChatWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PriceAlertCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    threshold?: SortOrder
    duration?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type PriceAlertAvgOrderByAggregateInput = {
    threshold?: SortOrder
    duration?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type PriceAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    threshold?: SortOrder
    duration?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type PriceAlertMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    threshold?: SortOrder
    duration?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type PriceAlertSumOrderByAggregateInput = {
    threshold?: SortOrder
    duration?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
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

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type PriceAlertListRelationFilter = {
    every?: PriceAlertWhereInput
    some?: PriceAlertWhereInput
    none?: PriceAlertWhereInput
  }

  export type PriceAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TelegramChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramChatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TelegramChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramChatSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TelegramChatCreateNestedOneWithoutPriceAlertsInput = {
    create?: XOR<TelegramChatCreateWithoutPriceAlertsInput, TelegramChatUncheckedCreateWithoutPriceAlertsInput>
    connectOrCreate?: TelegramChatCreateOrConnectWithoutPriceAlertsInput
    connect?: TelegramChatWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TelegramChatUpdateOneWithoutPriceAlertsNestedInput = {
    create?: XOR<TelegramChatCreateWithoutPriceAlertsInput, TelegramChatUncheckedCreateWithoutPriceAlertsInput>
    connectOrCreate?: TelegramChatCreateOrConnectWithoutPriceAlertsInput
    upsert?: TelegramChatUpsertWithoutPriceAlertsInput
    disconnect?: TelegramChatWhereInput | boolean
    delete?: TelegramChatWhereInput | boolean
    connect?: TelegramChatWhereUniqueInput
    update?: XOR<XOR<TelegramChatUpdateToOneWithWhereWithoutPriceAlertsInput, TelegramChatUpdateWithoutPriceAlertsInput>, TelegramChatUncheckedUpdateWithoutPriceAlertsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PriceAlertCreateNestedManyWithoutTelegramChatInput = {
    create?: XOR<PriceAlertCreateWithoutTelegramChatInput, PriceAlertUncheckedCreateWithoutTelegramChatInput> | PriceAlertCreateWithoutTelegramChatInput[] | PriceAlertUncheckedCreateWithoutTelegramChatInput[]
    connectOrCreate?: PriceAlertCreateOrConnectWithoutTelegramChatInput | PriceAlertCreateOrConnectWithoutTelegramChatInput[]
    createMany?: PriceAlertCreateManyTelegramChatInputEnvelope
    connect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
  }

  export type PriceAlertUncheckedCreateNestedManyWithoutTelegramChatInput = {
    create?: XOR<PriceAlertCreateWithoutTelegramChatInput, PriceAlertUncheckedCreateWithoutTelegramChatInput> | PriceAlertCreateWithoutTelegramChatInput[] | PriceAlertUncheckedCreateWithoutTelegramChatInput[]
    connectOrCreate?: PriceAlertCreateOrConnectWithoutTelegramChatInput | PriceAlertCreateOrConnectWithoutTelegramChatInput[]
    createMany?: PriceAlertCreateManyTelegramChatInputEnvelope
    connect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
  }

  export type PriceAlertUpdateManyWithoutTelegramChatNestedInput = {
    create?: XOR<PriceAlertCreateWithoutTelegramChatInput, PriceAlertUncheckedCreateWithoutTelegramChatInput> | PriceAlertCreateWithoutTelegramChatInput[] | PriceAlertUncheckedCreateWithoutTelegramChatInput[]
    connectOrCreate?: PriceAlertCreateOrConnectWithoutTelegramChatInput | PriceAlertCreateOrConnectWithoutTelegramChatInput[]
    upsert?: PriceAlertUpsertWithWhereUniqueWithoutTelegramChatInput | PriceAlertUpsertWithWhereUniqueWithoutTelegramChatInput[]
    createMany?: PriceAlertCreateManyTelegramChatInputEnvelope
    set?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    disconnect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    delete?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    connect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    update?: PriceAlertUpdateWithWhereUniqueWithoutTelegramChatInput | PriceAlertUpdateWithWhereUniqueWithoutTelegramChatInput[]
    updateMany?: PriceAlertUpdateManyWithWhereWithoutTelegramChatInput | PriceAlertUpdateManyWithWhereWithoutTelegramChatInput[]
    deleteMany?: PriceAlertScalarWhereInput | PriceAlertScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PriceAlertUncheckedUpdateManyWithoutTelegramChatNestedInput = {
    create?: XOR<PriceAlertCreateWithoutTelegramChatInput, PriceAlertUncheckedCreateWithoutTelegramChatInput> | PriceAlertCreateWithoutTelegramChatInput[] | PriceAlertUncheckedCreateWithoutTelegramChatInput[]
    connectOrCreate?: PriceAlertCreateOrConnectWithoutTelegramChatInput | PriceAlertCreateOrConnectWithoutTelegramChatInput[]
    upsert?: PriceAlertUpsertWithWhereUniqueWithoutTelegramChatInput | PriceAlertUpsertWithWhereUniqueWithoutTelegramChatInput[]
    createMany?: PriceAlertCreateManyTelegramChatInputEnvelope
    set?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    disconnect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    delete?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    connect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    update?: PriceAlertUpdateWithWhereUniqueWithoutTelegramChatInput | PriceAlertUpdateWithWhereUniqueWithoutTelegramChatInput[]
    updateMany?: PriceAlertUpdateManyWithWhereWithoutTelegramChatInput | PriceAlertUpdateManyWithWhereWithoutTelegramChatInput[]
    deleteMany?: PriceAlertScalarWhereInput | PriceAlertScalarWhereInput[]
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

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type TelegramChatCreateWithoutPriceAlertsInput = {
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramChatUncheckedCreateWithoutPriceAlertsInput = {
    id?: number
    userId: string
    chatId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramChatCreateOrConnectWithoutPriceAlertsInput = {
    where: TelegramChatWhereUniqueInput
    create: XOR<TelegramChatCreateWithoutPriceAlertsInput, TelegramChatUncheckedCreateWithoutPriceAlertsInput>
  }

  export type TelegramChatUpsertWithoutPriceAlertsInput = {
    update: XOR<TelegramChatUpdateWithoutPriceAlertsInput, TelegramChatUncheckedUpdateWithoutPriceAlertsInput>
    create: XOR<TelegramChatCreateWithoutPriceAlertsInput, TelegramChatUncheckedCreateWithoutPriceAlertsInput>
    where?: TelegramChatWhereInput
  }

  export type TelegramChatUpdateToOneWithWhereWithoutPriceAlertsInput = {
    where?: TelegramChatWhereInput
    data: XOR<TelegramChatUpdateWithoutPriceAlertsInput, TelegramChatUncheckedUpdateWithoutPriceAlertsInput>
  }

  export type TelegramChatUpdateWithoutPriceAlertsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramChatUncheckedUpdateWithoutPriceAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertCreateWithoutTelegramChatInput = {
    id?: string
    type: $Enums.AlertType
    threshold?: number | null
    duration?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    userId: string
  }

  export type PriceAlertUncheckedCreateWithoutTelegramChatInput = {
    id?: string
    type: $Enums.AlertType
    threshold?: number | null
    duration?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    userId: string
  }

  export type PriceAlertCreateOrConnectWithoutTelegramChatInput = {
    where: PriceAlertWhereUniqueInput
    create: XOR<PriceAlertCreateWithoutTelegramChatInput, PriceAlertUncheckedCreateWithoutTelegramChatInput>
  }

  export type PriceAlertCreateManyTelegramChatInputEnvelope = {
    data: PriceAlertCreateManyTelegramChatInput | PriceAlertCreateManyTelegramChatInput[]
    skipDuplicates?: boolean
  }

  export type PriceAlertUpsertWithWhereUniqueWithoutTelegramChatInput = {
    where: PriceAlertWhereUniqueInput
    update: XOR<PriceAlertUpdateWithoutTelegramChatInput, PriceAlertUncheckedUpdateWithoutTelegramChatInput>
    create: XOR<PriceAlertCreateWithoutTelegramChatInput, PriceAlertUncheckedCreateWithoutTelegramChatInput>
  }

  export type PriceAlertUpdateWithWhereUniqueWithoutTelegramChatInput = {
    where: PriceAlertWhereUniqueInput
    data: XOR<PriceAlertUpdateWithoutTelegramChatInput, PriceAlertUncheckedUpdateWithoutTelegramChatInput>
  }

  export type PriceAlertUpdateManyWithWhereWithoutTelegramChatInput = {
    where: PriceAlertScalarWhereInput
    data: XOR<PriceAlertUpdateManyMutationInput, PriceAlertUncheckedUpdateManyWithoutTelegramChatInput>
  }

  export type PriceAlertScalarWhereInput = {
    AND?: PriceAlertScalarWhereInput | PriceAlertScalarWhereInput[]
    OR?: PriceAlertScalarWhereInput[]
    NOT?: PriceAlertScalarWhereInput | PriceAlertScalarWhereInput[]
    id?: StringFilter<"PriceAlert"> | string
    type?: EnumAlertTypeFilter<"PriceAlert"> | $Enums.AlertType
    threshold?: FloatNullableFilter<"PriceAlert"> | number | null
    duration?: IntNullableFilter<"PriceAlert"> | number | null
    minPrice?: FloatNullableFilter<"PriceAlert"> | number | null
    maxPrice?: FloatNullableFilter<"PriceAlert"> | number | null
    createdAt?: DateTimeFilter<"PriceAlert"> | Date | string
    userId?: StringFilter<"PriceAlert"> | string
    chatId?: StringNullableFilter<"PriceAlert"> | string | null
  }

  export type PriceAlertCreateManyTelegramChatInput = {
    id?: string
    type: $Enums.AlertType
    threshold?: number | null
    duration?: number | null
    minPrice?: number | null
    maxPrice?: number | null
    createdAt?: Date | string
    userId: string
  }

  export type PriceAlertUpdateWithoutTelegramChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAlertUncheckedUpdateWithoutTelegramChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAlertUncheckedUpdateManyWithoutTelegramChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    threshold?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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