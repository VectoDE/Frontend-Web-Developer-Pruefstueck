const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDatabase = require('./database/connect.database.cjs');
const indexRoutes = require('./routes/index.routes.cjs');
const userRoutes = require('./routes/user.routes.cjs');
const categoryRoutes = require('./routes/category.routes.cjs');
const postRoutes = require('./routes/post.routes.cjs');
const productRoutes = require('./routes/product.routes.cjs');
const analyticsRoutes = require('./routes/analytics.routes.cjs');
const attackRoutes = require('./routes/attack.routes.cjs');
const authRoutes = require('./routes/auth.routes.cjs');
const chatRoutes = require('./routes/chat.routes.cjs');
const fileRoutes = require('./routes/file.routes.cjs');
const notificationRoutes = require('./routes/notification.routes.cjs');
const partnershipRoutes = require('./routes/partnership.routes.cjs');
const paymentRoutes = require('./routes/payment.routes.cjs');
const profileRoutes = require('./routes/profile.routes.cjs');
const referralRoutes = require('./routes/referral.routes.cjs');
const roleRoutes = require('./routes/role.routes.cjs');
const socialclubRoutes = require('./routes/socialclub.routes.cjs');
const tagRoutes = require('./routes/tag.routes.cjs');
const ticketRoutes = require('./routes/ticket.routes.cjs');
const verificationRoutes = require('./routes/verification.routes.cjs');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/notification', notificationRoutes);
app.use('/verification', verificationRoutes);
app.use('/profile', profileRoutes);

app.use('/category', categoryRoutes);
app.use('/post', postRoutes);
app.use('/product', productRoutes);
app.use('/role', roleRoutes);
app.use('/tag', tagRoutes);
app.use('/ticket', ticketRoutes);
app.use('/partnership', partnershipRoutes);
app.use('/socialclub', socialclubRoutes);
app.use('/file', fileRoutes);

app.use('/chat', chatRoutes);

app.use('/payment', paymentRoutes);
app.use('/referral', referralRoutes);

app.use('/analytics', analyticsRoutes);
app.use('/attack', attackRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'documentation.html'));
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};

startServer();
