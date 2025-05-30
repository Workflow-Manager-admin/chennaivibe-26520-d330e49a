import React from "react";

// Import feature components for page composition
import FilterSidebar from "./FilterSidebar";
import WishlistGroup from "./WishlistGroup";
import RealTimeChennaiImages from "./RealTimeChennaiImages";
import ExperienceList from "./ExperienceList";
import InteractiveMap from "./InteractiveMap";
import CuratedCollections from "./CuratedCollections";
import BookingSection from "./BookingSection";
import UserDashboard from "./UserDashboard";
import HostDashboard from "./HostDashboard";
import HostProfile from "./HostProfile";
import ReviewGallery from "./ReviewGallery";

// PUBLIC_INTERFACE
/**
 * MainContainer
 * Primary layout orchestrator for ChennaiVibe. Composes all major feature components in a
 * monochrome, functional page structure suitable for rapid iteration and extension.
 */
function MainContainer() {
  return (
    <div
      style={{
        backgroundColor: "var(--kavia-dark, #1A1A1A)",
        color: "var(--text-color, #fff)",
        minHeight: "100vh",
        width: "100%",
        fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      }}
    >
      {/* Main Navigation */}
      <nav
        style={{
          background: "var(--kavia-dark, #1A1A1A)",
          borderBottom: "1px solid var(--border-color, #333)",
          padding: "16px 0",
          marginBottom: 0,
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontWeight: 600, fontSize: "1.25rem", letterSpacing: "0.02em" }}>
            <span style={{ color: "var(--kavia-orange, #E87A41)", marginRight: 6 }}>*</span>
            ChennaiVibe
          </div>
          <button
            className="btn"
            style={{
              background: "var(--kavia-orange, #E87A41)",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              padding: "8px 20px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Account
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container" style={{ margin: "0 auto", padding: "32px 8px", maxWidth: 1200 }}>
        {/* Hero/Visual Section */}
        <section
          style={{
            textAlign: "center",
            padding: "48px 0 32px",
            borderBottom: "1px solid var(--border-color, #333)",
            marginBottom: 32,
          }}
        >
          <h1 style={{ color: "var(--text-color, #fff)", fontSize: "2.6rem", fontWeight: 700, margin: 0 }}>ChennaiVibe</h1>
          <p style={{ color: "var(--text-secondary, #bbb)", fontSize: "1.15rem", margin: "12px 0 0" }}>
            Hyperlocal Experiences · Real People · Authentic Chennai
          </p>
        </section>

        {/* Grid Layout: Sidebar + Main */}
        <div style={{ display: "flex", flexDirection: "row", gap: "32px", alignItems: "flex-start" }}>
          {/* Filter Sidebar + Wishlist */}
          <aside
            style={{
              flex: "0 0 260px",
              borderRight: "1px solid var(--border-color, #333)",
              padding: "20px 16px 0 0",
              minHeight: 450,
            }}
          >
            {/* Filter Sidebar */}
            <FilterSidebar />
            {/* Wishlist & Social Sharing */}
            <div style={{ marginTop: 36 }}>
              <WishlistGroup />
            </div>
          </aside>
          {/* Main Feature Area */}
          <div style={{ flex: "1 1 0", paddingLeft: 16 }}>
            {/* Real-time Chennai Images */}
            <div style={{ marginBottom: 32 }}>
              <RealTimeChennaiImages />
            </div>

            {/* Experience Listings */}
            <div style={{ marginBottom: 40 }}>
              <ExperienceList />
            </div>

            {/* Interactive Map */}
            <div style={{ marginBottom: 40 }}>
              <InteractiveMap />
            </div>

            {/* Curated Collections & Trends */}
            <div style={{ marginBottom: 32 }}>
              <CuratedCollections />
            </div>

            {/* Booking and Payment */}
            <div style={{ marginBottom: 28 }}>
              <BookingSection />
            </div>

            {/* User Dashboard */}
            <div style={{ marginBottom: 24 }}>
              <UserDashboard />
            </div>

            {/* Host Dashboard */}
            <div style={{ marginBottom: 24 }}>
              <HostDashboard />
            </div>

            {/* Host Profile (showcase structure; in real usage would be conditional) */}
            <div style={{ marginBottom: 24 }}>
              <HostProfile />
            </div>

            {/* Small Group Booking - Use BookingSection with a note for simplicity */}
            <div style={{ marginBottom: 24 }}>
              <section>
                <h3>Small Group Booking</h3>
                <div>[ Small group booking placeholder ]</div>
              </section>
            </div>

            {/* Reviews & Media */}
            <div style={{ marginBottom: 28 }}>
              <ReviewGallery />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainContainer;
