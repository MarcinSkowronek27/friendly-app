export interface WorkResponseDto {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: [object];
  status: string;
  priority: string;
}
