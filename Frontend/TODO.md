# TODO: Improve Admin.tsx Page

## Tasks to Complete

- [x] Add new mock API functions to `src/lib/api.ts` for admin-specific data (stats, charts, user list, payment list, recent activities).
- [ ] Create `src/components/admin/AdminNavbar.tsx` component for navigation sidebar (dashboard, users, payments, settings).
- [ ] Overhaul `src/pages/Admin.tsx`:
  - [ ] Add state for active section and sidebar collapse.
  - [ ] Implement dashboard section with stats cards (total users, pending payments, processed payments, revenue).
  - [ ] Add charts: BarChart for payment trends, PieChart for payment status, LineChart for user growth.
  - [ ] Add recent activities list.
  - [ ] Implement users section with table and search/filter.
  - [ ] Implement payments section with table and export.
  - [ ] Implement settings section with form.
  - [ ] Integrate animations, react-query, i18n, and responsive design.
- [ ] Test the updated Admin page: Run `npm run dev`, check for errors, responsiveness, and functionality.
- [ ] Lint and build: Run `npm run lint` and `npm run build` to ensure no issues.

## Notes
- Use existing dependencies and components (shadcn/ui, recharts, lucide-react, etc.).
- Mock data only; no real API integration.
- Follow patterns from SuperAdmin.tsx but scope to admin role.
- Ensure TypeScript compliance and error handling.
