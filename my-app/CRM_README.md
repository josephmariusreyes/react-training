# CRM SPA Application

A professional Customer Relationship Management (CRM) Single Page Application built with React and TypeScript.

## Features

### 🔐 Authentication
- **Login Page**: Default page with credentials validation
  - Username: `test`
  - Password: `testpw`
  - Session persistence using localStorage

### 📊 Dashboard
- Professional dashboard with statistics widgets
- Recent activity feed
- Top customers list
- Sales overview chart
- Quick stats with progress indicators

### 👥 Customer Management
- **Customer List**: 
  - Searchable table with filtering functionality
  - Filter by customer status (Active, Inactive, Prospect)
  - Search by name, email, or company
  - Click on any customer to view details
  
- **Customer Details**:
  - View complete customer information
  - Edit customer details inline
  - Professional layout with sidebar
  - Account summary and quick actions

### 🎨 UI/UX Features
- Responsive design
- Professional gradient themes
- Smooth transitions and hover effects
- Clean and modern interface
- Left sidebar navigation

## Technology Stack

- **React 18** with TypeScript
- **React Router v6** for navigation
- **LocalStorage** as database
- **CSS3** for styling
- Modern React patterns (Hooks, Context API)

## Best Practices Implemented

1. **TypeScript**: Full type safety throughout the application
2. **Component Organization**: Separated concerns (pages, components, services, contexts)
3. **State Management**: React Context API for authentication
4. **Service Layer**: Abstracted data operations
5. **Protected Routes**: Route guards for authenticated pages
6. **Code Reusability**: Shared components and utilities
7. **Error Handling**: Input validation and error states
8. **Responsive Design**: Mobile-friendly layouts

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout with sidebar
│   └── ProtectedRoute.tsx
├── contexts/           # React contexts
│   └── AuthContext.tsx
├── pages/              # Page components
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Customers.tsx
│   └── CustomerDetails.tsx
├── services/           # Business logic
│   └── customerService.ts
├── types/              # TypeScript interfaces
│   └── Customer.ts
└── App.tsx            # Main app with routing
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

4. **Login**:
   - Username: `test`
   - Password: `testpw`

## Navigation

- **Dashboard**: View statistics and recent activity
- **Customers**: Browse and search customers
- **Inventory**: Alert message (placeholder)
- **Settings**: Alert message (placeholder)
- **Logout**: Sign out and return to login

## Data Storage

All customer data is stored in the browser's localStorage. The application includes 8 sample customers with realistic data. Data persists across browser sessions.

## Features in Detail

### Dashboard Widgets
- Total Customers count with growth percentage
- Active Orders tracking
- Revenue statistics
- Support Tickets monitoring
- Top 5 customers by spending
- Sales overview bar chart
- Quick stats with progress bars

### Customer Management
- Full CRUD operations for customers
- Real-time search and filtering
- Sortable table columns
- Status badges (Active, Inactive, Prospect)
- Detailed customer profiles
- Edit mode with validation

## Future Enhancements

- Backend API integration
- Advanced reporting
- Export to CSV/PDF
- Email integration
- Calendar and scheduling
- Invoice management
- Advanced analytics

## Development

Built following React best practices:
- Functional components with hooks
- Custom hooks for reusable logic
- Context for global state
- Service layer for data operations
- TypeScript for type safety
- Responsive CSS with mobile-first approach

---

**Note**: This is a learning project demonstrating modern React development practices with TypeScript.
