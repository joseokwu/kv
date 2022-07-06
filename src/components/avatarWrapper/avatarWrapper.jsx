const AvatarWrapper = ({ condition, initials, children, size }) => {
    return condition ? (
        children
    ) : (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                display: "grid",
                placeItems: "center",
                background: "rgba(46, 49, 146, 0.125)",
                borderRadius: "50%",
                fontSize: `${0.4 * size}px`,
                fontWeight: "700",
            }}
        >
            {initials ? initials?.toUpperCase() : "KV"}
        </div>
    );
};

export default AvatarWrapper;
