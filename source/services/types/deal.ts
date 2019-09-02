import { BoolString, ISODate, NumberString } from './common'

// @todo This is approximate structure. Might not be accurate
export interface Deal {
  // Deal can have user fields
  // @todo Remove `unknown` when all fields will be known
  readonly [key: string]: string | unknown

  // tslint:disable-next-line: no-mixed-interface
  readonly ID: NumberString
  readonly TITLE: string
  readonly TYPE_ID: string
  readonly STAGE_ID: string
  readonly PROBABILITY: unknown // @todo Check is it right
  readonly CURRENCY_ID: string
  readonly OPPORTUNITY: NumberString
  readonly TAX_VALUE: NumberString
  readonly LEAD_ID: NumberString
  readonly COMPANY_ID: NumberString
  readonly CONTACT_ID: NumberString | null
  readonly QUOTE_ID: NumberString | null
  readonly BEGINDATE: ISODate
  readonly CLOSEDATE: ISODate
  readonly ASSIGNED_BY_ID: NumberString
  readonly CREATED_BY_ID: NumberString
  readonly MODIFY_BY_ID: NumberString
  readonly DATE_CREATE: ISODate
  readonly DATE_MODIFY: ISODate
  readonly OPENED: BoolString
  readonly CLOSED: BoolString
  readonly COMMENTS: string
  readonly ADDITIONAL_INFO: unknown // @todo Check is it right
  readonly LOCATION_ID: NumberString | null
  readonly CATEGORY_ID: NumberString
  readonly STAGE_SEMANTIC_ID: NumberString
  readonly IS_NEW: BoolString
  readonly IS_RECURRING: BoolString
  readonly IS_RETURN_CUSTOMER: BoolString
  readonly IS_REPEATED_APPROACH: BoolString
  readonly SOURCE_ID: NumberString | null
  readonly SOURCE_DESCRIPTION: string | null
  readonly ORIGINATOR_ID: string
  readonly ORIGIN_ID: NumberString
  readonly UTM_SOURCE: string | null
  readonly UTM_MEDIUM: string | null
  readonly UTM_CAMPAIGN: string | null
  readonly UTM_CONTENT: string | null
  readonly UTM_TERM: string | null
}
