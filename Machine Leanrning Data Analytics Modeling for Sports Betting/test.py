import psycopg2

conn = psycopg2.connect(
    host="192.168.1.114",
    database="postgres",
    user="postgres",
    password="vbx12345")

cursor = conn.cursor()

cursor.execute("select version()")

data = cursor.fetchone()
print("Connection established to: ",data)




    pool_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, max_length=4)
    trader = models.ForeignKey(User,  on_delete=models.CASCADE, related_name='mui')
    team_id = models.CharField(max_length= 256)
    contract = models.CharField(max_length=256)
    league_name = models.CharField(max_length=256, choices=league.choices, default=league.premierleague)
    shares = models.DecimalField(max_digits=6, decimal_places=3)
    shares_amount = models.DecimalField(max_digits=8, decimal_places=3)
    execution_type = models.CharField(max_length= 256, choices=TradeType)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    class Meta:
        verbose_name = 'MarketPool'
        verbose_name_plural = 'MarketPool'

    def get_url(self):
            return reverse('MarketPool_by_name', args=[self.pool_id])

    def __str__(self):
        return str(self.pool_id)
